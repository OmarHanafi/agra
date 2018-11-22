import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../shared/interfaces/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../shared/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  product : Product;
  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient) { }

  getProduct(id : number) : Observable<Product> {
    return this.httpClient.get<Product>(this.apiLink+"main/product?id="+id);
  }

  getCategory(id : number) : Observable<Category> {
    return this.httpClient.get<Category>(this.apiLink+"main/category?id="+id);
  }

  getCategoryProducts(idcategory : number) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiLink+"main/categoryProducts?id="+idcategory);
  }

}
