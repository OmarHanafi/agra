import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../client.service';
import { Product } from 'src/app/shared/interfaces/product';

declare function jsInit(): any;

@Component({
  selector: 'app-clientproduct',
  templateUrl: './clientproduct.component.html',
  styleUrls: ['./clientproduct.component.css']
})
export class ClientProductComponent implements OnInit {

  productId : number;
  product : Product;

  constructor(private route : ActivatedRoute, private clientService : ClientService) {}

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
      this.productId = parseInt(this.route.snapshot.paramMap.get('id'));    // Getting the product's id
      this.clientService.getProduct(this.productId).subscribe((data) => this.product = data);   // Getting the product
  }

}
