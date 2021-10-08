import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/core/homepage/homepage.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ListSongComponent} from "./components/song/list-song/list-song.component";
import {CreateSongComponent} from "./components/song/create-song/create-song.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginFormComponent},
  {path:'song-list', component :ListSongComponent},
  {path:'song-create', component :CreateSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
