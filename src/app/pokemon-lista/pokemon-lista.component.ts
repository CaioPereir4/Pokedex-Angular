
import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Typer } from '../model/type';
import { PokemonService } from 'src/services/pokemon.service';


@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent {

  constructor(public PokemonService: PokemonService){

  }
}
