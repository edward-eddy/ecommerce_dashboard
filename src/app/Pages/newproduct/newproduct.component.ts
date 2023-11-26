import { Component } from '@angular/core';
import { Products } from '../../Models/products';
import { Category } from '../../Models/category';
import { Subcategory } from '../../Models/subcategory';
import { ProductsService } from '../../Services/products.service';
import { CategoryService } from '../../Services/category.service';
import { SubcategoryService } from '../../Services/subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.scss',
})
export class NewproductComponent {
  product: Products = {} as Products;
  AllCategories: Category[] = [];
  AllSubCategories: Subcategory[] = [];
  constructor(
    public productsService: ProductsService,
    public router: Router,
    public categoryService: CategoryService,
    public subCategoryService: SubcategoryService
  ) {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.AllCategories = (data as any).data || [];
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.subCategoryService.getAllSubCategories().subscribe({
      next: (data) => {
        this.AllSubCategories = (data as any).data || [];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //==========< Add New Product >===============================================
  AddNewProduct() {
    this.productsService.insertNewProduct(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([`/product`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
