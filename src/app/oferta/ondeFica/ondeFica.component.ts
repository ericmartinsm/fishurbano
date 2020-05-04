import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService} from '../../ofertas.service';

@Component({
  selector: 'app-ondeFica',
  templateUrl: './ondeFica.component.html',
  styleUrls: ['./ondeFica.component.css'],
  providers: [OfertasService],
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: String= ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao:String)=>{ 
      this.ondeFica = descricao
    })
  }
  

}
