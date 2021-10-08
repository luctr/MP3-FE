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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatMenuModule} from "@angular/material/menu";
import {InterceptorService} from "./service/interceptor.service";
import { ListPlaylistComponent } from './components/feature/list-playlist/list-playlist.component';
import { MusicPlayerComponent } from './components/feature/music-player/music-player.component';
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {CreatePlaylistComponent} from "./components/feature/create-playlist/create-playlist.component";
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
    WeekTopComponent,
    AppComponent,
    LoginFormComponent,
    ListPlaylistComponent,
    MusicPlayerComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    NgxAudioPlayerModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
