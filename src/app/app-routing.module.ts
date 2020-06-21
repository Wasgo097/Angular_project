import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VievComponent } from './viev/viev.component';
import { OneHeroComponent } from './one-hero/one-hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'heroes/:id',component:OneHeroComponent},
  {path:'heroes',component:VievComponent},
  {path:'new_hero',component:NewHeroComponent},
  {path:'edit_hero/:id',component:EditHeroComponent},
  {path:'delete_hero/:id',component:DeleteHeroComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }