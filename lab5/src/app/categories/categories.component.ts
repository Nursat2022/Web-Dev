import { Component, OnInit } from '@angular/core';
import {categories, Category} from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = categories;

  ngOnInit(): void{
  }
}
