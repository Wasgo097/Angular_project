import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VievComponent } from './viev/viev.component';
import { OneHeroComponent } from './one-hero/one-hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
const routes: Routes = [
  {path:'',redirectTo:'/heroes',pathMatch:'full'},
  {path:'heroes/:id',component:OneHeroComponent},
  {path:'heroes',component:VievComponent},
  {path:'new_hero',component:NewHeroComponent},
  {path:'edit_hero/:id',component:EditHeroComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }