import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetail } from 'src/app/shared/interfaces/orderDetail';


@Component({
  selector: 'clientnavbar',
  templateUrl: './clientnavbar.component.html',
  styleUrls: ['./clientnavbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  redirect(categ : number){
    console.log("choisis numero : "+categ);
    this.router.navigate(["client/category",categ]);


  }



  logOrder(){
    console.log("ok")
    let order : OrderDetail = <OrderDetail> JSON.parse(sessionStorage.getItem("order"));
    if(order==null){
      alert("no order created");
    }else{
        for(let item of order.cartItems)
        {
          console.log(item)
        }
      }
    }
  

}
