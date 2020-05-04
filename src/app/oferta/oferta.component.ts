import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OfertasService} from '../ofertas.service';
import { Oferta} from  '../shared/oferta.model'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  private route: ActivatedRoute

  constructor(route: ActivatedRoute, private ofertaService: OfertasService) {
    this.route= route
   }

  ngOnInit() {
  //console.log(this.route.snapshot.params['id']) //vai receber o parametro passado pelo template, home, diversao restaurante [routerLink]="['/oferta', oferta.id]"
  this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
  .then((oferta: Oferta)=> {
    this.oferta = oferta
  })
}

}
