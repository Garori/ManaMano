import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { CardComponent } from './components/card/card.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaCardsComponent } from './components/categoria-cards/categoria-cards.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PostarComponent } from './pages/postar/postar.component';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvisosComponent,
    CardComponent,
    CategoriasComponent,
    CategoriaCardsComponent,
    FavoritosComponent,
    PostarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
