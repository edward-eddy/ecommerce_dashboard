import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../Models/category';
import { CategoryService } from '../../../Services/category.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrl: './newcategory.component.scss',
})
export class NewcategoryComponent implements OnInit {
  category: Category = {} as Category;
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public categoryService: CategoryService,
    public router: Router
  ) {}
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
  //=============< Creat New Category >===================================================
  AddNewCategory() {
    this.categoryService.insertNewCategory(this.category).subscribe({
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
