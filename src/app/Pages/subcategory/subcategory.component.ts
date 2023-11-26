import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../../Models/subcategory';
import { SubcategoryService } from '../../Services/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss',
})
export class SubcategoryComponent implements OnInit {
  AllSubCategories: Subcategory[] = [];
  constructor(public subcategoryService: SubcategoryService) {}
  ngOnInit(): void {
    this.subcategoryService.getAllSubCategories().subscribe({
      next: (response) => {
        this.AllSubCategories = (response as any).data || [];
        console.log(this.AllSubCategories);
        this.AllSubCategories.forEach((subCategory) => {
          return subCategory.createdAt, subCategory.updatedAt;
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //====================< Delete subCategory >=============================================
  removeSubCategory(subCategoryId: string | undefined) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmDelete) {
      this.subcategoryService.deletSubCategory(subCategoryId).subscribe(() => {
        this.AllSubCategories = this.AllSubCategories.filter(
          (subCategory) => subCategory._id !== subCategoryId
        );
      });
    }
  }
}
