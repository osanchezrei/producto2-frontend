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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
