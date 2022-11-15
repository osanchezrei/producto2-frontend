import { Component } from '@angular/core';
import { Jugador, JUGADORES } from '../../../data/jugadores';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})

export class JugadoresComponent {
  playerFilter = '';
  jugadores = JUGADORES;
  selectedJugador!: Jugador;

  onSelect(jugador: Jugador){
    this.selectedJugador = jugador;
  }
}
