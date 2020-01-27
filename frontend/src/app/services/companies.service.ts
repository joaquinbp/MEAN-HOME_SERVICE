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
}
