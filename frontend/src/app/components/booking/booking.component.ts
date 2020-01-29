import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';

declare var M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookings();
  }

  addBooking(form: NgForm) {

    if(form.value._id){
      this.bookingService.editBooking(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({html: 'Booking update succesfully'});
          this.getBookings();
        });
    } else {
      this.bookingService.createBooking(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Booking save succesfully'});
        this.getBookings();
      });
    }
  }

  resetForm(form: NgForm) {
    if(form){
      form.reset();
      this.bookingService.selectedBooking = new Booking();
    }
  }

  getBookings() {
    this.bookingService.getBookings()
      .subscribe(res => {
        this.bookingService.bookings = res as Booking[];
        console.log(res);
      });
  }

  editBooking(booking: Booking){
    this.bookingService.selectedBooking = booking;
  }

  deleteBooking(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.bookingService.deleteBooking(_id)
        .subscribe( res => {
          this.getBookings();
          M.toast({html: 'Booking delete succesfully'});
        });
    }
  }

}