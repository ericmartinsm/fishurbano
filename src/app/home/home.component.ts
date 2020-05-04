import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'; // declaracao do serviço ofertas.service
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]// declaracao do serviço ofertas.service
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] //atributo chamdo de ofertas do tipo oferta

  constructor( private ofertasService: OfertasService) { }//(variavel ofertasService: do tipo OfertasService que esta no servico ofertas) declaracao do serviço ofertas.service, aqui cria uma variavel sendo um atributo do objeto

  ngOnInit() {
    //console.log("ofertas1",this.ofertas)
    //this.ofertas = this.ofertasService.getOfertas()// acessa a classe ofertasService que tem o getOfertas dentro                            
    //console.log(this.ofertas)
    this.ofertasService.getOfertas()// retornando uma promise
    .then(( ofertas: Oferta[]) => { 
        this.ofertas = ofertas
      })

    // metodo .then executa uma acao quando nossa promessa estiver resolvida, vai receber em "ofertas: do tipo Oferta[] que e uma array"
    //this.ofertas vai receber o que for resolvido pela promessa que esta sendo recebi como parametro em .then(( ofertas: Oferta[]) 
     

    .catch(( reject:any) => console.log(reject))
    //metodo .catch tem quase a mesma funcao do .then()
    //arrow function(recebe parametro) => {executa alguma coisa}
    //metodo .then() ele executa uma aÇAO quando nossa promessa estiver resolvida
  }

}
