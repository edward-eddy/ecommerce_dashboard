import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-order-details',
  templateUrl: './product-card-order-details.component.html',
  styleUrl: './product-card-order-details.component.scss'
})
export class ProductCardOrderDetailsComponent {
  @Input() prd ;

  ngOnInit(){
    // console.log(this.prd);
    
  }
}
