import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Category } from 'src/app/models/entities/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []
  currentCategory: Category;
  nullCategory: Category;
  dataLoaded: boolean = false
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //console.log("init çalıştı")
    this.getCategories()
  }
  getCategories() {
    console.log("Metot async çalışşır")
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
      this.dataLoaded = true
    })
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  setAllCategory() {
    this.currentCategory = this.nullCategory;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
