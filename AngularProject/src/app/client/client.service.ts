import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/interfaces/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  product : Product;
  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient) { }

  getProduct(id : number) : Observable<Product> {
    return this.httpClient.get<Product>(this.apiLink+"client/product?id="+id);
  }

}
