import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../../../models/subcategory';
import { SubcategoryService } from './../../../services/subcategory.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-editsubcategory',
  templateUrl: './editsubcategory.component.html',
  styleUrl: './editsubcategory.component.scss',
})
export class EditsubcategoryComponent implements OnInit {
  AllCategories: Category[] = [];
  subCategory: Subcategory = {} as Subcategory;
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  currentSubCategory: string | any = '';
  subcategoryById: Subcategory | undefined = undefined;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public subcategoryService: SubcategoryService,
    public router: Router,
    public activetedRout: ActivatedRoute,
    public categoryService: CategoryService
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
    this.activetedRout.paramMap.subscribe((paramMap) => {
      this.currentSubCategory = paramMap.get(`id`);
      console.log(this.currentSubCategory);
      this.subcategoryService
        .getSubCategoryById(this.currentSubCategory)
        .subscribe((data) => {
          if (data) {
            console.log(data);
            this.subCategory = (data as any).data || [];
          } else {
            alert('this category is not found');
            this.router.navigate([`/subcategory/subcategory`]);
          }
        });
    });
  }
  //=============< toggle nave >==========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //=============< update New subCategory >===================================================
  updatesubCategory() {
    this.subcategoryService
      .updateSubCtegory(this.currentSubCategory, this.subCategory)
      .subscribe({
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
