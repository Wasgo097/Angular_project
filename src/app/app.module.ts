import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TileComponent } from './tiles/tile.component';
import { VievComponent } from './viev/viev.component';
import { HeroTileComponent } from './hero-tile/hero-tile.component';
import { HeroService } from './service/serv.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OneHeroComponent } from './one-hero/one-hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule }   from '@angular/forms';
export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TileComponent,
    VievComponent,
    HeroTileComponent,
    OneHeroComponent,
    NewHeroComponent,
    EditHeroComponent,
    DeleteHeroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
