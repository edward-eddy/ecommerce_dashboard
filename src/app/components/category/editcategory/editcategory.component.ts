import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.scss',
})
export class EditcategoryComponent implements OnInit {
  category: Category = {} as Category;
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  currentCategory: string | any = '';
  categoryById: Category | undefined = undefined;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public categoryService: CategoryService,
    public router: Router,
    public activetedRout: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });
    this.activetedRout.paramMap.subscribe((paramMap) => {
      this.currentCategory = paramMap.get(`id`);
      console.log(this.currentCategory);
      this.categoryService
        .getCategoryById(this.currentCategory)
        .subscribe((data) => {
          if (data) {
            console.log(data);
            this.category = (data as any).data || [];
          } else {
            alert('this category is not found');
            this.router.navigate([`/category/category`]);
          }
        });
    });
  }
  //=============< toggle nave >==========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //=============< Creat New Category >===================================================
  AddNewCategory() {
    this.categoryService
      .updateCtegory(this.currentCategory, this.category)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate([`/category/category`]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
