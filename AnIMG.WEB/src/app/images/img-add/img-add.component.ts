import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';
import { Image } from 'src/app/Models/image';


@Component({
  selector: 'app-img-add',
  templateUrl: './img-add.component.html',
  styleUrls: ['./img-add.component.css']
})
export class ImgAddComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  image: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'images/add',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,
      queueLimit: 1
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

  }

}
