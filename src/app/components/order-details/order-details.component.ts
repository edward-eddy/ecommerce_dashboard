import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderRequestsService } from '../../services/order-requests.service';
import { IOrders } from '../../models/iorders';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  date : Date 
  postDate : string = ""
  order : IOrders
  statusEdited : boolean = false
  status : string 
  constructor(private route: ActivatedRoute ,private orderService : OrderRequestsService , private router : Router){
  }
  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const orderIdFromParams = routeParams.get('id');
    this.orderService.getOneOrderById(orderIdFromParams).subscribe({
      next:(data) =>{
        this.order = data   
        console.log(this.order);
        this.status = this.order.status
        this.date = new Date(this.order.createdAt)
        this.postDate = this.date.toLocaleDateString('en-US' , { year: 'numeric', month: 'long', day: 'numeric' })
             
      },
      error(err) {
        console.log(err);
        
      },
    })
    
  }
  toggleStatus(status: string) {
    console.log(status);
    
    this.orderService.toggleStatus(this.order?._id, status).subscribe({
      next:(data)=>{
        console.log(data);
        this.statusEdited = !this.statusEdited
        this.ngOnInit()
      },
      error(err) {
        console.log(err);
        
      }
    })
    
  }
  editStatus() {

    if(this.status == "shipped"){
      console.log("Waiting for Supplier" );
      this.status = "Waiting for Supplier"
      
    }else{
      this.status = "shipped"
    }
    this.statusEdited = !this.statusEdited
    
  }
  
}
