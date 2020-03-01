import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Models/image';
import { ImageService } from 'src/app/_services/image.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  imgs: Image[];
  categories: Category[];

  constructor(private imageService: ImageService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.imgs = data.imgs;
    });
  }
}
