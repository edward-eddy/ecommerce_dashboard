import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Products } from '../../../models/products';
import { ProductRequestsService } from '../../../services/product-requests.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  AllProducts: Products[] = [];
  isNextButtonDisabled: boolean = false;
  currentPage = 1;
  pageSize = 8;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public productService: ProductRequestsService
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });
    //================< get all products >====================================================
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.AllProducts = (response as any).data || [];
        // console.log(this.AllProducts);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //================< toggel nav >=========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //================< remove product >=====================================================
  removeProduct(productId: string | undefined) {
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
  //==================< search by name of product >=========================================
  nameSearch(filtervalue: string): Products[] {
    filtervalue = filtervalue.toLocaleLowerCase();

    var filteredProduct = this.AllProducts.filter((product: Products) => {
      return product.title.toLocaleLowerCase().includes(filtervalue);
    });
    // console.log(filteredProduct);
    return (this.AllProducts = filteredProduct);
  }
  //==================< get all products for search >======================================
  getAllProducts(page: number = 1) {
    this.productService.getProducts(page, this.pageSize).subscribe({
      next: (response) => {
        this.AllProducts = (response as any).data || [];
        // console.log(this.AllProducts);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //===================< next & previes >==================================================
  nextPage() {
    if (this.currentPage < 5) {
      this.currentPage++;
      this.getAllProducts(this.currentPage);
    } else {
      this.isNextButtonDisabled = true;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAllProducts(this.currentPage);
    } else {
      this.isNextButtonDisabled = true;
    }
  }
}
