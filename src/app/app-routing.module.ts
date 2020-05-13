import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VievComponent } from './viev/viev.component';
import { OneHeroComponent } from './one-hero/one-hero.component';
const routes: Routes = [
  {path:'heroes',component:VievComponent},
  {path:'heroes/:id',component:OneHeroComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
