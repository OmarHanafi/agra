import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/category';
import { MainService } from '../../../shared/services/main.service';
import { Product } from 'src/app/shared/interfaces/product';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { DomSanitizer } from '@angular/platform-browser';


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

  currentProducts : Product[];          // Products currently displayed
  currentPage : number = 1;
  totalPages : number;
  perPage : number = 12;
  arrPage = Array;

  constructor(private route : ActivatedRoute, private mainService : MainService,
              private paginationService : PaginationService, private domSanitizer : DomSanitizer) {
  }

  reset(){
    this.currentPage = 1;
    this.products = Array();
    this.currentProducts = Array();
    this.category = null;
  }

  setPage(page : number){
    if(page > 0 && page <= this.totalPages){
      this.currentPage = page;
      this.currentProducts = this.paginationService.getPage<Product>(this.products,page,this.perPage);
    }
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
          this.products = this.mainService.sanitizeProducts(data);                                                // Getting the products
          this.totalPages = (this.products.length > 0) ? Math.ceil(this.products.length/this.perPage) : 1;
          this.setPage(this.currentPage);
        });                         

        this.mainService.getCategory(this.categoryId)
        .subscribe((data)=> this.category = data);                             // Getting the category
      });    
    }

}
