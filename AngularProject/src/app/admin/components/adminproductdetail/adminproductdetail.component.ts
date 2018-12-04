import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { Category } from 'src/app/shared/interfaces/category';
import { AdminService } from '../../services/admin.service';

declare function imageUpload(): any;

@Component({
  selector: 'adminproductdetail',
  templateUrl: './adminproductdetail.component.html',
  styleUrls: ['./adminproductdetail.component.css']
})
export class AdminProductDetailComponent implements OnInit {

  private selectedProduct : Product = null;
  selected : boolean = false;
  selectedFile : File = null;

  @Input() allCategories : Array<Category>;

  @Output() loadProducts: EventEmitter<any> = new EventEmitter();

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  updateProduct(){
    /* TODO set category */
    let formdata : FormData = new FormData();
    formdata.append("product",JSON.stringify(this.selectedProduct));
    if(this.selectedFile !== null)
      formdata.append("file",this.selectedFile);
    this.selected = false;                                      // To hide the detail component
    this.adminService.updateProduct(formdata).subscribe(() => {
        this.loadProducts.emit(null);                             // Reloading the products list
    }); 
  }

  deleteProduct(id : number){
    this.selected = false;                                      // To hide the detail component
    if(confirm("Are you sure you want to delete this product ?")){
      this.adminService.deleteProduct(id).subscribe(() => {
        this.loadProducts.emit(null);                             // Reloading the products list
      }); 
    }
  }

  onFileSelected($event){
    this.selectedFile = $event.target.files[0];
  }

  setProduct(product : Product){
    this.selectedProduct = {...product};
    this.selectedProduct.category = {...product.category};
    this.selected = true;
    setTimeout(imageUpload,500);
  }

}
