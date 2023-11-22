import { Component, OnInit } from '@angular/core';
import { ProductRequestsService } from '../../Services/product-requests.service';
import { UserRequestsService } from '../../Services/user-requests.service';
import { OrderRequestsService } from '../../Services/order-requests.service';

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
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.productList = data.data;
        let productCounterInterval: any = setInterval(() => {
          if (this.productCounter == data.results) {
            clearInterval(productCounterInterval);
            return
          }
          this.productCounter++;
        }, 30);
      },
    });
    this.productService.getTopTenProducts().subscribe({
      next: (data) =>{
        this.topTen = data.data
      }
    })
    // get all orders and show the count with interval
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orderList = data.allOrders;
        let orderCounterInterval: any = setInterval(() => {
          if (this.orderCounter == this.orderList.length) {
            clearInterval(orderCounterInterval);
            return
          }
          this.orderCounter++;
        }, 30);
      },
    });
    // get all users and show the count with interval
    this.userService.getAllUsers().subscribe({
      next: (data)=>{
        let userCounterInterval:any = setInterval(()=>{
          if(this.userCounter == data.length){
            clearInterval(userCounterInterval)
            return
          }
          this.userCounter++;
        },30)
      }
    })
  }
}
