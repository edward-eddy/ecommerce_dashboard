import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategory } from '../../Models/subcategory';
import { SubcategoryService } from '../../Services/subcategory.service';
import { Category } from '../../Models/category';
import { CategoryService } from './../../Services/category.service';

@Component({
  selector: 'app-newsubcategory',
  templateUrl: './newsubcategory.component.html',
  styleUrl: './newsubcategory.component.scss',
})
export class NewsubcategoryComponent {
  subCategory: Subcategory = {} as Subcategory;
  AllCategories: Category[] = [];
  AllSubCategory: Subcategory[] = [];
  base64: any = '';
  constructor(
    public categoryService: CategoryService,
    public subCategoryService: SubcategoryService,
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
  //=======================< creat new subcategory >========================================
  AddNewSubCategory() {
    this.subCategoryService.insertNewSubCategory(this.subCategory).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate([`/subcategory`]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //=========================< img base64 >============================================
  getImgPsth(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.base64 = reader.result as string;
      console.log(this.base64);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
