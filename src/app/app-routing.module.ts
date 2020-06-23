import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VievComponent } from './viev/viev.component';
import { OneHeroComponent } from './one-hero/one-hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { LoginComponent } from './login/login.component';
import { Authservice } from './service/authservice';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'heroes/:id',component:OneHeroComponent,canActivate: [Authservice]},
  {path:'heroes',component:VievComponent,canActivate: [Authservice]},
  {path:'new_hero',component:NewHeroComponent,canActivate: [Authservice]},
  {path:'edit_hero/:id',component:EditHeroComponent,canActivate: [Authservice]},
  {path:'delete_hero/:id',component:DeleteHeroComponent,canActivate: [Authservice] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }