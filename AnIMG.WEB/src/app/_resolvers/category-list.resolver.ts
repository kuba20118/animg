import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../Models/category';
import { CategoryService } from '../_services/category.service';


@Injectable()

export class CategoryListResolver implements Resolve<Category[]> {

    constructor(private categoryService: CategoryService,
                private router: Router,
                private alertify: AlertifyService) { }


    resolve(route: ActivatedRouteSnapshot): Observable<Category[]> {
        console.log('resolver');
        return this.categoryService.getCategories().pipe(
            catchError(error => {
                this.alertify.error('Problem z pobraniem danych1');
                this.router.navigate(['']);
                return of(null);
            })
        );

    }

}
