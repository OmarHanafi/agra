import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Category } from 'src/app/shared/interfaces/category';
import { MainService } from 'src/app/shared/services/main.service';

declare function jsInit(): any;

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private adminService : AdminService, private mainService : MainService) { }

  SelectedFile : File = null;
  allCategories : Category[] = new Array<Category>();

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
    this.mainService.getCategories().subscribe(data => {
      this.allCategories = data;              // Loading the categories
    })
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
