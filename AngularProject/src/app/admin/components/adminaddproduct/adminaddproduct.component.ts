import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminAddProductComponent implements OnInit {

  @Input()
  allCategories : Category[];

  SelectedFile : File = null;

  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  addProduct(data){
    let formdata = new FormData();
    let category : Category = <Category> {id:data.category,name:null}
    data.category = category;
    formdata.append("file",this.SelectedFile);
    formdata.append("product",JSON.stringify(data));
    this.adminService.addProduct(formdata);
    console.log(data);
  }

  onFileSelected(event){
    this.SelectedFile = event.target.files[0];
  }

}
