import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Category } from 'src/app/shared/interfaces/category';
import { Page } from 'src/app/shared/classes/page';
import { AdminProductDetailComponent } from '../adminproductdetail/adminproductdetail.component';

@Component({
  selector: 'adminlistproduct',
  templateUrl: './adminlistproduct.component.html',
  styleUrls: ['./adminlistproduct.component.css']
})
export class AdminListProductComponent implements OnInit {

  private _productList : Product[] = new Array<Product>();

  @Output() loadProducts: EventEmitter<any> = new EventEmitter();

  @Input() allCategories : Array<Category>;

  page : Page;

  @ViewChild(AdminProductDetailComponent)
  adminProductDetail : AdminProductDetailComponent;

  constructor(private mainService : MainService) { }

  get productList(){
    return this._productList;
  }

  @Input()
  set productList(productList : Array<Product>){
    this._productList = productList;
    this.page = new Page(8,productList);
  }

  ngOnInit() {
    if(this._productList.length == 0)
      this.fireLoadProducts();
  }

  fireLoadProducts(){
    this.loadProducts.emit(null);
  }

}
