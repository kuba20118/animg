import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Image } from 'src/app/Models/image';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  categories: Category[];
  @Input() img: Image;

  constructor(private categoryService: CategoryService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    console.log('cat list');
    this.categoryService.getCategories()
      .subscribe(data => this.categories = data);
  }

}
