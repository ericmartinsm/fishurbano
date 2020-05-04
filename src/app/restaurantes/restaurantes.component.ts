import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService] // servicos que serao providos para nosso component restaurantes
})
export class RestaurantesComponent implements OnInit {
  
  public ofertas: Oferta[]
  
  constructor(private ofertasService: OfertasService) { }

  

  ngOnInit() {
  this.ofertasService.getOfertasPorCategoria('restaurante')
  .then((ofertas: Oferta[]) =>{
    this.ofertas = ofertas
  })
  }

}
