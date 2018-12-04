import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/category';
import { MainService } from '../../../shared/services/main.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Page } from 'src/app/shared/classes/page';


declare function jsInit(): any;

@Component({
  selector: 'clientcategory',
  templateUrl: './clientcategory.component.html',
  styleUrls: ['./clientcategory.component.css']
})
export class ClientCategoryComponent implements OnInit {

  categoryId : number;
  category : Category;
  products : Product[];

  page : Page;

  constructor(private route : ActivatedRoute, private mainService : MainService) {
  }

  reset(){
    this.products = Array();
    this.category = null;
  }

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
    this.route.params.subscribe(val => {
        this.reset();
        this.categoryId = parseInt(this.route.snapshot.paramMap.get('id'));    // Getting the product's id

        this.mainService.getCategoryProducts(this.categoryId)
        .subscribe((data) => {
          this.products = this.mainService.sanitizeProducts(data);             // Getting the products
          this.page = new Page(12, data);
        });                         

        this.mainService.getCategory(this.categoryId)
        .subscribe((data)=> this.category = data);                             // Getting the category
      });    
    }

}
