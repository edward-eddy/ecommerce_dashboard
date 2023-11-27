import { Component, OnInit } from '@angular/core';
// import { Products } from '../../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../models/products';
// import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.scss',
})
export class EditproductComponent implements OnInit {
  currentProduct: number = 0;
  product: Products | undefined = undefined;
  constructor(
    public activetedRout: ActivatedRoute,
    public productsService: ProductsService,
    public router: Router
  ) {}
  ngOnInit(): void {
    //   this.activetedRout.paramMap.subscribe((paramMap) => {
    //     this.currentProduct = Number(paramMap.get(`id`));
    //     console.log(this.currentProduct);
    //     this.productsService
    //       .getProductById(this.currentProduct)
    //       .subscribe((data) => {
    //         if (data) {
    //           console.log(data);
    //           this.product = data;
    //         } else {
    //           alert('this product is not found');
    //           this.router.navigate([`/main/products/product`]);
    //         }
    //       });
    //   });
  }
}
