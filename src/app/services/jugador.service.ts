import { Jugador } from './../interfaces/Jugador';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {

  private jugadoresDB: AngularFireList<Jugador>;

  constructor(private db: AngularFireDatabase) {
    this.jugadoresDB = this.db.list('/jugadores', (ref) =>
      ref.orderByChild('nombre')
    );
  }

  getJugadores(): Observable<Jugador[]> {
    return this.
  }

  //Metodo para crear un nuevo jugador en la DB
  addJugador(jugador: Jugador) {
 
    return this.jugadoresDB.push(jugador);
  }

  //Borrar un Jugador de la DB
  deleteJugador(id: string) {
    //? Que base de datos afectaremos? Jugadores.
    //? El id del jugador que deseamos eliminar.
    this.db.list('/jugadores').remove(id);
  }

  //Editar un Jugador
  editJugador(newJugadorData) {
    //? Salvamos el Key.
    //? Eliminamos el registro anterior con el Key.
    //? Nuevamente asignamos a ese registro la nueva información en la base de datos.
    //? FireBase no acepta que ya se contenga una Key, por eso se hizo la Key opcional.
    //? Al borrar o actualizar daria problema sino fuera opcional.
    const $key = newJugadorData.$key;
    delete newJugadorData.$key;
    this.db.list('/jugadores').update($key, newJugadorData);
  }
}