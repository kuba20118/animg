import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Models/image';
import { ImageService } from 'src/app/_services/image.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-bigimg',
  templateUrl: './img-bigimg.component.html',
  styleUrls: ['./img-bigimg.component.css']
})
export class ImgBigimgComponent implements OnInit {

  img: Image;

  constructor(private imageService: ImageService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.img = data.img;
    });
  }

  // loadImage() {
  //   this.imageService.getImg(+this.route.snapshot.params.id)
  //     .subscribe((img: Image) => {
  //       this.img = img;
  //     }, error => {
  //       this.alertify.error(error);
  //     });
  // }
}
