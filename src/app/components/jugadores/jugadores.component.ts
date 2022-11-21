import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JUGADORES } from '../../../data/jugadores';
import { Jugador } from '../../interfaces/Jugador';
import { JugadorService } from '../../services/jugador.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})

export class JugadoresComponent implements OnInit{
  playerFilter = '';
  selectedJugador!: Jugador;
  jugadoresList$?: Observable<any[]>;

  constructor(private readonly jugadoresService: JugadorService) {}

  onSelect(jugador: Jugador){
    this.selectedJugador = jugador;
  }
  onDelete(jugador: Jugador){
    // this.jugadoresService.delete(this.selectedJugador.$key);
  }
  onCreate(){
  }

  ngOnInit(): void {
    this.jugadoresList$ = this.jugadoresService.getAll();
  }
}
