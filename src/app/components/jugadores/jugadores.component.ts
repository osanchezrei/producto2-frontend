import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador, JUGADORES } from '../../../data/jugadores';
import { JugadorService } from '../../services/jugador.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';

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

  jugadoresList$?: Observable<any[]>;
  constructor(private readonly jugadoresService: JugadorService) {}

  ngOnInit(): void {
    this.jugadoresList$ = this.jugadoresService.getAll();
  }
}
