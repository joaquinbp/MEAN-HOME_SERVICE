import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  readonly URL_API = 'http://localhost:4000/api/companies';
  selectedCompany: Companies;
  companies: Companies[];

  constructor(private http: HttpClient) { 
    this.selectedCompany = new Companies();
  }

  getCompanies() {
    return this.http.get(this.URL_API);
  }

  createCompany(company: Companies){
    return this.http.post(this.URL_API, company);
  }

  editCompany(company: Companies) {
    return this.http.put(this.URL_API + `/${company._id}`, company);
  }

  deleteCompany(_id : String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
