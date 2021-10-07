import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/core/homepage/homepage.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
