import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./components/core/homepage/homepage.component";
import {PageComponent} from "./components/feature/page/page.component";
import {SingerComponent} from "./components/feature/singer/singer.component";
import {SingerCreateComponent} from "./components/feature/singer/singer-create/singer-create.component";
import {SingerEditComponent} from "./components/feature/singer/singer-edit/singer-edit.component";
import {SingerDeleteComponent} from "./components/feature/singer/singer-delete/singer-delete.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {SearchComponent} from "./components/feature/search/search.component";



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
  path: 'page/:name',
  component: PageComponent
  },
  {
  path: 'search',
  component: SearchComponent
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
