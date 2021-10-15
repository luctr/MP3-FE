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
import {HttpClientModule} from "@angular/common/http";
import { PageComponent } from './components/feature/page/page.component';
import { SingerComponent } from './components/feature/singer/singer.component';
import { SingerCreateComponent } from './components/feature/singer/singer-create/singer-create.component';
import { SingerEditComponent } from './components/feature/singer/singer-edit/singer-edit.component';
import { SingerDeleteComponent } from './components/feature/singer/singer-delete/singer-delete.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { FilebaseComponent } from './filebase/filebase.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchComponent } from './components/feature/search/search.component';
import {MatMenuModule} from "@angular/material/menu";
import {InterceptorService} from "./service/interceptor/interceptor.service";

import { ListPlaylistComponent } from './components/feature/list-playlist/list-playlist.component';
import { MusicPlayerComponent } from './components/feature/music-player/music-player.component';
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {CreatePlaylistComponent} from "./components/feature/create-playlist/create-playlist.component";
import { SongTop6Component } from './components/feature/song-top6/song-top6.component';
import { SongUserIdComponent } from './components/song/song-user-id/song-user-id.component';
import { PlayListUserIdComponent } from './components/feature/play-list-user-id/play-list-user-id.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
// import { SongEditComponent } from './components/feature/song/song-edit/song-edit.component';
// import { SongDeleteComponent } from './components/feature/song/song-delete/song-delete.component';
import { ListComponent } from './components/feature/singer/list/list.component';
import { SongDetailComponent } from './components/feature/song/song-detail/song-detail.component';
import { TopSongComponent } from './components/feature/song/top-song/top-song.component';
import { CommentsComponent } from './components/feature/comments/comments.component';

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
    WeekTopComponent,
    PageComponent,
    SingerComponent,
    SingerCreateComponent,
    SingerEditComponent,
    SingerDeleteComponent,
    FilebaseComponent,
    SearchComponent,
    ListPlaylistComponent,
    MusicPlayerComponent,
    CreatePlaylistComponent,
    SongTop6Component,
    SongUserIdComponent,
    PlayListUserIdComponent,
    // SongEditComponent,
    // SongDeleteComponent
    CreatePlaylistComponent,
    ListComponent,
    SongDetailComponent,
    TopSongComponent,
    CommentsComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    NgxAudioPlayerModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
