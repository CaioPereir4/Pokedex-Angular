


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [

    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
