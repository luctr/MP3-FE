import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { HomepageComponent } from './components/core/homepage/homepage.component';
import { ListAlbumComponent } from './components/feature/list-album/list-album.component';
import { WhatNewComponent } from './components/feature/what-new/what-new.component';
import {WeekTopComponent} from "./components/feature/week-top/week-top.component";
import {AppRoutingModule} from "./app-routing.module";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    HomepageComponent,
    ListAlbumComponent,
    WhatNewComponent,
    WeekTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
