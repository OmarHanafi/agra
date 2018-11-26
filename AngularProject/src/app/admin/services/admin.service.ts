import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient) { }

  addProduct(formdata : FormData){
    this.httpClient
    .post(this.apiLink+"admin/addProduct", formdata)
    .subscribe();
  }

}
