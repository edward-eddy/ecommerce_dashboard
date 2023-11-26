import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../Models/products';
import { Category } from '../../../Models/category';
import { Subcategory } from '../../../Models/subcategory';
import { ProductsService } from '../../../Services/products.service';
import { CategoryService } from '../../../Services/category.service';
import { SubcategoryService } from '../../../Services/subcategory.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.scss',
})
export class NewproductComponent implements OnInit {
  product: Products = {} as Products;
  AllCategories: Category[] = [];
  AllSubCategories: Subcategory[] = [];
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  constructor(
    public productsService: ProductsService,
    public router: Router,
    public categoryService: CategoryService,
    public subCategoryService: SubcategoryService,
    private breakpointObserver: BreakpointObserver
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
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });
  }
  //==========< toggle nav >====================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //==========< Add New Product >===============================================
  AddNewProduct() {
    this.productsService.insertNewProduct(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([`/product/product`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
