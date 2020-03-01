import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Image } from '../Models/image';
import { ImageService } from '../_services/image.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()

export class ImgListResolver implements Resolve<Image[]> {

    constructor(private imgService: ImageService,
                private router: Router,
                private alertify: AlertifyService) { }


    resolve(route: ActivatedRouteSnapshot): Observable<Image[]> {
        return this.imgService.getImgs().pipe(
            catchError(error => {
                this.alertify.error('Problem z pobraniem danych4');
                this.router.navigate(['']);
                return of(null);
            })
        );

    }

}
