import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './views/register/register.component';
import { LoginNavbarWidgetComponent } from './widgets/login-navbar-widget/login-navbar-widget.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { ExploreComponent } from './views/explore/explore.component';
import { UserDrawerComponent } from './widgets/user-drawer/user-drawer.component';
import { HomeComponent } from './views/home/home.component';

//DRAG SCROLL
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginNavbarWidgetComponent,
    WelcomeComponent,
    ExploreComponent,
    UserDrawerComponent,
    HomeComponent
  ],
  imports: [
    DragScrollModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
