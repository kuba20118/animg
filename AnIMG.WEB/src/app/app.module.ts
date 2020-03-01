import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { appRoutes } from './routes';
import { LikedImgsComponent } from './likedImgs/likedImgs.component';
import { XGuard } from './_guards/x.guard';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserCardComponent } from './users/user-card/user-card.component';
import { ImgListComponent } from './images/img-list/img-list.component';
import { ImgTileComponent } from './images/img-tile/img-tile/img-tile.component';
import { ImgBigimgComponent } from './images/img-bigimg/img-bigimg.component';
import { ImgDataResolver } from './_resolvers/img-data.resolver';
import { ImgListResolver } from './_resolvers/img-list.resolver';
import { ImgEditComponent } from './images/img-edit/img-edit.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ImgAddComponent } from './images/img-add/img-add.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryListResolver } from './_resolvers/category-list.resolver';
import { CategoryService } from './_services/category.service';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      UserListComponent,
      LikedImgsComponent,
      UserCardComponent,
      ImgListComponent,
      ImgTileComponent,
      ImgBigimgComponent,
      ImgEditComponent,
      UserEditComponent,
      ImgAddComponent,
      CategoryListComponent

   ],
   imports: [
      BrowserModule,
      FileUploadModule,
      HttpClientModule,
      FormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
   ],
   providers: [
      AuthService,
      AlertifyService,
      UserService,
      XGuard,
      ErrorInterceptorProvider,
      ImgDataResolver,
      ImgListResolver,
      CategoryListResolver,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
