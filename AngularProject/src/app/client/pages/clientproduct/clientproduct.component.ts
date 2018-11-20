import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientproduct',
  templateUrl: './clientproduct.component.html',
  styleUrls: ['./clientproduct.component.css']
})
export class ClientProductComponent implements OnInit {

  productId : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
