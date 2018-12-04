import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient) { }

  addProduct(formdata : FormData) : Observable<any>{
    return this.httpClient.post(this.apiLink+"admin/addProduct", formdata);
  }

  updateProduct(formdata : FormData) : Observable<any> {
    return this.httpClient.post(this.apiLink+"admin/updateProduct", formdata);
  }

  deleteProduct(id : number) : Observable<any> {
    return this.httpClient.get(this.apiLink+"admin/deleteProduct?id="+id);
  }

}
