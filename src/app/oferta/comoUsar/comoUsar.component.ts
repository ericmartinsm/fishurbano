import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService} from '../../ofertas.service';

@Component({
  selector: 'app-comoUsar',
  templateUrl: './comoUsar.component.html',
  styleUrls: ['./comoUsar.component.css'],
  providers: [ OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: String = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao:String)=>{ 
      this.comoUsar = descricao
    })
  }

}
