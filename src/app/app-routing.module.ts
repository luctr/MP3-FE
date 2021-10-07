import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./components/core/homepage/homepage.component";
import {PageComponent} from "./components/page/page.component";
import {SingerComponent} from "./components/singer/singer.component";
import {SingerCreateComponent} from "./components/singer/singer-create/singer-create.component";
import {SingerEditComponent} from "./components/singer/singer-edit/singer-edit.component";
import {SingerDeleteComponent} from "./components/singer/singer-delete/singer-delete.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
  path: 'page/:id',
  component: PageComponent
  },
  {
  path: 'singer/list',
  component: SingerComponent
  },
  {
  path: 'singer/create',
  component: SingerCreateComponent
  },
  {
  path: 'singer/edit/:id',
  component: SingerEditComponent
  },
  {
  path: 'singer/delete/:id',
  component: SingerDeleteComponent
  },
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
