import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/category';
import { ClientService } from '../../services/client.service';
import { Product } from 'src/app/shared/interfaces/product';
import { PaginationService } from 'src/app/shared/services/pagination.service';

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

  constructor(private route : ActivatedRoute, private clientService : ClientService,
              private paginationService : PaginationService) {
    this.categoryId = parseInt(this.route.snapshot.paramMap.get('id'));    // Getting the product's id

    this.clientService.getCategoryProducts(this.categoryId)
    .subscribe((data) => {
      this.products = data;                                                // Getting the products
      this.totalPages = Math.ceil(this.products.length/this.perPage)+6;
      this.setPage(this.currentPage);
    });                         

    this.clientService.getCategory(this.categoryId)
    .subscribe((data)=> this.category = data);                             // Getting the category
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
    
  }

}
