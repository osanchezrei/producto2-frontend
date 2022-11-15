import { Component, Input } from '@angular/core';
import { Jugador } from 'src/data/jugadores';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent{
  @Input() jugador!: Jugador;
}
