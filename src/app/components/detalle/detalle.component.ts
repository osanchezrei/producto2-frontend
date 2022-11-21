import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../../interfaces/Jugador';
import { JugadorService } from '../../services/jugador.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent{
  @Input() jugador?: Jugador;

  newJugadorForm = this.formBuilder.nonNullable.group({
    nombre: this.jugador?.nombre,
    descripcion: '',
    posicion: '',
    edad: 0,
    altura: 0,
    puntos: 0,
    audio: '',
    video: '',
    img: ''
  });

  constructor(
    private readonly jugadoresService: JugadorService,
    private formBuilder: FormBuilder,
  ){
    console.log(this.jugador?.id)
  }
  
  onSubmit(): void{
    this.jugadoresService.update(this.newJugadorForm.value, this.jugador!);
    console.log(this.jugador?.nombre);
    //this.newJugadorForm.reset();
  }
}
