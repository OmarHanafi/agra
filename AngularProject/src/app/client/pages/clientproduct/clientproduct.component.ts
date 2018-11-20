import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare function jsInit(): any;

@Component({
  selector: 'app-clientproduct',
  templateUrl: './clientproduct.component.html',
  styleUrls: ['./clientproduct.component.css']
})
export class ClientProductComponent implements OnInit {

  productId : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    jsInit();           // Loading the template's js files
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
