import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { MainService } from 'src/app/shared/services/main.service';

declare function jsInit(): any;

@Component({
  selector: 'adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private mainService : MainService) { }

  allCategories : Category[] = new Array<Category>();

  activeTab : number = 1;     // 0 = Product list ; 1 = New product

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
    this.mainService.getCategories().subscribe(data => {
      this.allCategories = data;              // Loading the categories
    })
  }

  isActive(val : number) : boolean {
    return (this.activeTab == val);
  }

  toggleTab(val : number){
    this.activeTab = val;
  }

}
