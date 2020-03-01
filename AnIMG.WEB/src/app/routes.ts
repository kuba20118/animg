import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LikedImgsComponent } from './likedImgs/likedImgs.component';
import { XGuard } from './_guards/x.guard';
import { ImgListComponent } from './images/img-list/img-list.component';
import { ImgBigimgComponent } from './images/img-bigimg/img-bigimg.component';
import { ImgDataResolver } from './_resolvers/img-data.resolver';
import { ImgListResolver } from './_resolvers/img-list.resolver';
import { ImgEditComponent } from './images/img-edit/img-edit.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ImgAddComponent } from './images/img-add/img-add.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryListResolver } from './_resolvers/category-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: ImgListComponent, resolve: { imgs: ImgListResolver } },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [XGuard],
        children: [
            { path: 'top', component: UserListComponent },
            { path: 'image/:id', component: ImgBigimgComponent, resolve: { img: ImgDataResolver } },
            { path: 'ulubione', component: LikedImgsComponent },
            { path: 'image/:id/edit', component: ImgEditComponent },
            { path: 'profile', component: UserEditComponent },
            { path: 'dodaj', component: ImgAddComponent },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];
