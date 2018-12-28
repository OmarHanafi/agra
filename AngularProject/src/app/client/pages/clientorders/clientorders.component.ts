import { Component, OnInit } from '@angular/core';
import { CustomerOrder } from 'src/app/shared/interfaces/customerOrder';
import { OrderService } from '../../order.service';

@Component({
  selector: 'clientorders',
  templateUrl: './clientorders.component.html',
  styleUrls: ['./clientorders.component.css']
})
export class ClientordersComponent implements OnInit {


  public orders =[];



  constructor(private orderService:OrderService) { 

    this.orderService.getCustomerOrders().subscribe( data  => this.orders=data );
    console.log(this.orders)



  }

  ngOnInit() {

    
  }

}
