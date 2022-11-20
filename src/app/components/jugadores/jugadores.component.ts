import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { Jugador } from 'src/app/interfaces/Jugador';
import { JugadorService } from 'src/app/services/jugador.service'

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})

export class JugadoresComponent implements OnInit{

  jugador$!: Observable<Jugador[]>;
  playerFilter = '';
  selectedJugador!: Jugador;

  constructor(private readonly jugadoresService: JugadorService){}

  ngOnInit(): void {
    this.jugador$ = this.jugadoresService.getAll();
  }

  onSelect(jugador: Jugador){
    this.selectedJugador = jugador;
  }
  onDelete(jugador: Jugador){
    this.jugadoresService.delete(this.selectedJugador.$key);
  }
  onCreate(){

    
  }
}
