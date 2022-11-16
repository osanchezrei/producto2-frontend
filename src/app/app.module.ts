import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { JugadorService } from './services/jugador.service';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    EquiposComponent,
    DetalleComponent,
    ReproductorComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    JugadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
