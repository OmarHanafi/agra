import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  product : Product;
  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient, private domSanitizer : DomSanitizer) { }

  getProduct(id : number) : Observable<Product> {
    return this.httpClient.get<Product>(this.apiLink+"main/product?id="+id);
  }

  getCategoryProducts(idcategory : number) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiLink+"main/categoryProducts?id="+idcategory);
  }

  getCategory(id : number) : Observable<Category> {
    return this.httpClient.get<Category>(this.apiLink+"main/category?id="+id);
  }

  getCategories() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiLink+"main/categories");
  }

  sanitizeProducts(products : Product[]){
    let result : Product[] = Array<Product>();
    for(let product of products){
      product.safeUrl = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+product.base64Image);
      result.push(product);
    }
    return result;
  }

}
