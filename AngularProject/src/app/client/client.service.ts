import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }

  product : Product;

  getProduct(id : number) : Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:8080/Agra-project/client/product?id="+id);
  }

}
