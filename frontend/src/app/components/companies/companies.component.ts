import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { Companies } from '../../models/companies';

declare var M: any;

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private companyService: CompaniesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  addCompany(form: NgForm) {

    if(form.value._id){
      this.companyService.editCompany(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({html: 'Company update succesfully'});
          this.getCompanies();
        });
    } else {
      this.companyService.createCompany(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Company save succesfully'});
        this.getCompanies();
      });
    }
  }

  resetForm(form: NgForm) {
    if(form){
      form.reset();
      this.companyService.selectedCompany = new Companies();
    }
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe(res => {
        this.companyService.companies = res as Companies[];
        console.log(res);
      });
  }

  editCompany(company: Companies){
    this.companyService.selectedCompany = company;
  }

  deleteCompany(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.companyService.deleteCompany(_id)
        .subscribe( res => {
          this.getCompanies();
          M.toast({html: 'Company delete succesfully'});
        });
    }
  }

}