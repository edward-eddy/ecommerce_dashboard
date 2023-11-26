import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { Category } from '../../Models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  AllCategories: Category[] = [];
  constructor(public categoryServec: CategoryService) {}
  //======================< Get All Categories >================================================
  ngOnInit(): void {
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
}
