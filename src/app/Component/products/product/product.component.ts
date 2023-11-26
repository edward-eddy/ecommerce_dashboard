import { Component, OnInit } from '@angular/core';
import { Products } from '../../../Models/products';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  AllProducts: Products[] = [];

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.AllProducts = (response as any).data || [];
        console.log(this.AllProducts);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeProduct(productId: number | undefined) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      this.productService.deletProduct(productId).subscribe(() => {
        this.AllProducts = this.AllProducts.filter(
          (product) => product._id !== productId
        );
      });
    }
  }
}
