import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly URL_API = 'http://localhost:4000/api/booking';
  selectedBooking: Booking;
  booking: Booking[];

  constructor(private http: HttpClient) {
    this.selectedBooking = new Booking();
   }
}
