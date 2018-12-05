import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { AdminService } from '../../services/admin.service';

declare function imageUpload(): any;
declare function resetImageUpload() : any;

@Component({
  selector: 'adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminAddProductComponent implements OnInit {

  @Input()
  allCategories : Category[];

  SelectedFile : File = null;

  @Output() loadProducts: EventEmitter<any> = new EventEmitter();

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    imageUpload();
  }

  addProduct(data){
    let formdata = new FormData();
    let category : Category = <Category> {id:data.category,name:null}
    data.category = category;
    formdata.append("file",this.SelectedFile);
    formdata.append("product",JSON.stringify(data));
    this.adminService.addProduct(formdata).subscribe(() => {
      this.loadProducts.emit(null);
      resetImageUpload();
      this.showSuccessAlert();
    });
    
  }

  showSuccessAlert(){
    document.getElementById("successalert").style.display = "block";
    setTimeout(function(){
      document.getElementById("successalert").style.display = "none";
    },2000);
  }

  onFileSelected(event){
    this.SelectedFile = event.target.files[0];
  }

}
