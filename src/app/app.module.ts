import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';// importanto http module
import {RouterModule, Router} from '@angular/router'

import {ROUTES} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { from } from 'rxjs';
import { OfertaComponent } from './oferta/oferta.component';

@NgModule({
   declarations: [
      AppComponent,
      TopoComponent,
      HomeComponent,
      RodapeComponent,
      RestaurantesComponent,
      DiversaoComponent,
      OfertaComponent,
      OfertaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES)//forRoot=>éomapeamentoglobalparaaaplicação, oforChild=>mapeamentoparacriacaoderotasinternasparacomponente\\
     //importantohttpmodule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
