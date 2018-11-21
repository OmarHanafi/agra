import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/category';
import { ClientService } from '../../client.service';
import { Product } from 'src/app/shared/interfaces/product';

declare function jsInit(): any;

@Component({
  selector: 'app-clientcategory',
  templateUrl: './clientcategory.component.html',
  styleUrls: ['./clientcategory.component.css']
})
export class ClientCategoryComponent implements OnInit {

  categoryId : number;
  category : Category;
  products : Product[];

  constructor(private route : ActivatedRoute, private clientService : ClientService) {
    this.categoryId = parseInt(this.route.snapshot.paramMap.get('id'));    // Getting the product's id
    this.clientService.getCategoryProducts(this.categoryId)
    .subscribe((data) => {this.products = data});                          // Getting the products
    this.clientService.getCategory(this.categoryId)
    .subscribe((data)=> this.category = data);                             // Getting the category
  }

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
  }

}
