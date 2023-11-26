import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subcategory } from '../../../Models/subcategory';
import { SubcategoryService } from './../../../Services/subcategory.service';
import { Router } from '@angular/router';
import { Category } from '../../../Models/category';
import { CategoryService } from '../../../Services/category.service';
@Component({
  selector: 'app-newsubcategory',
  templateUrl: './newsubcategory.component.html',
  styleUrl: './newsubcategory.component.scss',
})
export class NewsubcategoryComponent {
  AllCategories: Category[] = [];
  subCategory: Subcategory = {} as Subcategory;
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public subcategoryService: SubcategoryService,
    public categoryService: CategoryService,
    public router: Router
  ) {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.AllCategories = (data as any).data || [];
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
  //=============< toggle nave >==========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //=============< Creat New subCategory >===================================================
  AddNewsubCategory() {
    this.subcategoryService.insertNewSubCategory(this.subCategory).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([`/subcategory/subcategory`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
