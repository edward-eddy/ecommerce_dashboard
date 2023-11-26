import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Products } from '../../../Models/products';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  AllProducts: Products[] = [];
  constructor(
    private breakpointObserver: BreakpointObserver,
    public productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });

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
  toggleNav() {
    this.flagNav = !this.flagNav;
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

  nameSearch(filtervalue: string): Products[] {
    filtervalue = filtervalue.toLocaleLowerCase();

    var filteredProduct = this.AllProducts.filter((product: Products) => {
      return product.title.toLocaleLowerCase().includes(filtervalue);
    });
    console.log(filteredProduct);
    return (this.AllProducts = filteredProduct);
  }
  getAllProducts() {
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
}
