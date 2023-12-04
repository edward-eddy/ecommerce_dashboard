import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrl: './newcategory.component.scss',
})
export class NewcategoryComponent implements OnInit {
  category: Category = {} as Category;
  image: string = '';
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
  //============================< image upload >================================================

  files: File[] = [];

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files[0]);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  //=============< toggle nave >==========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //=============< Creat New Category >===================================================
  AddNewCategory() {
    if (!this.files[0]) {
      alert('upload image first');
      return;
    }

    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'angular-cloudinary');
    data.append('cloud_name', 'doksixv16');

    this.categoryService.uploadImage(data).subscribe((res) => {
      if (res) {
        // console.log(res);
        this.image = res.secure_url;
        // console.log('image', this.image);
        this.category.image = this.image;
        this.categoryService.insertNewCategory(this.category).subscribe({
          next: (data) => {
            // console.log(data);
            this.router.navigate([`/category/category`]);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
