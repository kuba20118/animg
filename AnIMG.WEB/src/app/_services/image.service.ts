import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../Models/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getImgs(): Observable<Image[]> {
    return this.http.get<Image[]>(this.baseUrl + 'images');
  }

  getImg(id: number): Observable<Image> {
    return this.http.get<Image>(this.baseUrl + 'images/' + id);
  }

}
