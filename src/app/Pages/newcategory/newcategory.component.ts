import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../Models/category';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrl: './newcategory.component.scss',
})
export class NewcategoryComponent {
  category: Category = {} as Category;
  constructor(public categoryService: CategoryService, public router: Router) {}
  //=============< Creat New Category >===================================================
  AddNewCategory() {
    this.categoryService.insertNewCategory(this.category).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([`/category`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
