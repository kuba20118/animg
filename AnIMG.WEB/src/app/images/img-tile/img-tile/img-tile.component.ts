import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/Models/image';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-img-tile',
  templateUrl: './img-tile.component.html',
  styleUrls: ['./img-tile.component.css']
})
export class ImgTileComponent implements OnInit {

  @Input() img: Image;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.img.categories.length; i++) {
    }
  }

}
