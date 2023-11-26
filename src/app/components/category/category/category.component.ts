import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  AllCategories: Category[] = [];
  constructor(
    private breakpointObserver: BreakpointObserver,
    public categoryServec: CategoryService
  ) {}
  //======================< Get All Categories >================================================
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });

    this.categoryServec.getAllCategories().subscribe({
      next: (response) => {
        this.AllCategories = (response as any).data || [];
        console.log(this.AllCategories);
        this.AllCategories.forEach((category) => {
          return category.createdAt, category.updatedAt;
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //=======================< toggle nav >======================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //=======================< Delete category >==================================================
  removeCategory(categoryId: string | undefined) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmDelete) {
      this.categoryServec.deletCategory(categoryId).subscribe(() => {
        this.AllCategories = this.AllCategories.filter(
          (category) => category._id !== categoryId
        );
      });
    }
  }
  //========================< get All category for search >=====================================
  getAllcategories() {
    this.categoryServec.getAllCategories().subscribe({
      next: (response) => {
        this.AllCategories = (response as any).data || [];
        console.log(this.AllCategories);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //========================< search by name >==================================================
  nameSearch(filtervalue: string): Category[] {
    filtervalue = filtervalue.toLocaleLowerCase();

    var filteredCategories = this.AllCategories.filter((category: Category) => {
      return category.name.toLocaleLowerCase().includes(filtervalue);
    });

    return (this.AllCategories = filteredCategories);
  }
}
