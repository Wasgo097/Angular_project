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
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TileComponent,
    VievComponent,
    HeroTileComponent,
    OneHeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
