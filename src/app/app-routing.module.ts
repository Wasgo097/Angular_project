import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VievComponent } from './viev/viev.component';
import { OneHeroComponent } from './one-hero/one-hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/authservice';
import { JwtModule } from "@auth0/angular-jwt";
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'heroes/:id',component:OneHeroComponent,canActivate: [AuthService]},
  {path:'heroes',component:VievComponent,canActivate: [AuthService]},
  {path:'new_hero',component:NewHeroComponent,canActivate: [AuthService]},
  {path:'edit_hero/:id',component:EditHeroComponent,canActivate: [AuthService]},
  {path:'delete_hero/:id',component:DeleteHeroComponent,canActivate: [AuthService] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }