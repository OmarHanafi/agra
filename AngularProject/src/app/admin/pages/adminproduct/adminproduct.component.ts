import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { MainService } from 'src/app/shared/services/main.service';
import { Product } from 'src/app/shared/interfaces/product';
import { AdminListProductComponent } from '../../components/adminlistproduct/adminlistproduct.component';

declare function jsInit(): any;

@Component({
  selector: 'adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private mainService : MainService) { }

  allCategories : Category[] = new Array<Category>();

  productList : Product[] = new Array<Product>();

  activeTab : number = 0;     // 0 = Product list ; 1 = New product

  ngAfterViewInit(){
    jsInit();                 // Loading the template's js files
  }

  ngOnInit() {
    this.mainService.getCategories().subscribe(data => {
      this.allCategories = data;              // Loading the categories
    })
  }

  onLoadProducts($event){                   // Called from the child component
    this.mainService.getProducts().subscribe(data => {
      this.productList = this.mainService.sanitizeProducts(data);              // Loading the products
    })
  }

  isActive(val : number) : boolean {
    return (this.activeTab == val);
  }

  toggleTab(val : number){
    this.activeTab = val;
  }

}
