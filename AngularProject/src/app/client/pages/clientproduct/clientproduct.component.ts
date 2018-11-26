import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../../shared/services/main.service';
import { Product } from 'src/app/shared/interfaces/product';
import { DomSanitizer } from '@angular/platform-browser';


declare function jsInit(): any;

@Component({
  selector: 'app-clientproduct',
  templateUrl: './clientproduct.component.html',
  styleUrls: ['./clientproduct.component.css']
})
export class ClientProductComponent implements OnInit {

  productId : number;
  product : Product;

  constructor(private route : ActivatedRoute, private mainService : MainService) {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));    // Getting the product's id
    this.mainService.getProduct(this.productId).subscribe((data) => {
      let arr = new Array(); arr.push(data);                              // Creating an array of data
      this.product = mainService.sanitizeProducts(arr)[0];              // Getting the product
    });   
  }

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
      
  }

}
