import { Component } from '@angular/core';
import { Jugador, JUGADORES } from '../../../data/jugadores';
import { JugadorService } from 'src\app\services\jugador.service.ts'
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

  onDelete(jugador: Jugador){

  }
}
