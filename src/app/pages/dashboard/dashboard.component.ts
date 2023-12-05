import { Component, OnInit } from '@angular/core';
import { ProductRequestsService } from '../../services/product-requests.service';
import { UserRequestsService } from '../../services/user-requests.service';
import { OrderRequestsService } from '../../services/order-requests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  productList: object[] = [];
  topTen: any[] = [];
  orderList: object[] = [];
  productCounter: number = 0;
  userCounter: number = 0;
  orderCounter: number = 0;

  constructor(
    public productService: ProductRequestsService,
    public userService: UserRequestsService,
    public orderService: OrderRequestsService,
  ) {}
  ngOnInit(): void {
    // get all products and show the count with interval
    this.productService.getProductCountPerYear().subscribe({
      next: (data) => {
        this.productCounter = data.productCount
      },
    });
    this.productService.getTopProducts().subscribe({
      next: (data) =>{
        this.topTen = data.data
      }
    })

    // get all orders and show the count with interval
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orderList = data.allOrders;
        this.orderCounter = this.orderList.length
      },
    });

    // get all users and show the count with interval
    this.userService.getAllUsers().subscribe({
      next: (data)=>{
        this.userCounter = data.length
        // let userCounterInterval:any = setInterval(()=>{
        //   if(this.userCounter == data.length){
        //     clearInterval(userCounterInterval)
        //     return
        //   }
        //   this.userCounter++;
        // },30)
      }
    })
  }
}
