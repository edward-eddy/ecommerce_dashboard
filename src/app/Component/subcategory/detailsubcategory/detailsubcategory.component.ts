import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../../../Models/subcategory';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoryService } from './../../../Services/subcategory.service';
@Component({
  selector: 'app-detailsubcategory',
  templateUrl: './detailsubcategory.component.html',
  styleUrl: './detailsubcategory.component.scss',
})
export class DetailsubcategoryComponent implements OnInit {
  currentSubCategory: string | any = '';
  subcategory: Subcategory | undefined = undefined;
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public activetedRout: ActivatedRoute,
    public subcategoryService: SubcategoryService,
    public router: Router
  ) {}
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
            this.subcategory = (data as any).data || [];
          } else {
            alert('this category is not found');
            this.router.navigate([`/subcategory/subcategory`]);
          }
        });
    });
  }
  //======================< nav toggel >=========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
}
