import {Oferta} from './shared/oferta.model'
import { Injectable } from '@angular/core'; // faz com que a classe seja capaz de receber um serviço externo
import { HttpClient } from '@angular/common/http'; // importanto http module
import {URL_API} from './URL_API.service'


//essa classse sera injetada no componente HOME


@Injectable()
export class OfertasService{
    
    //para criar um serviço e necessario passa essa instanica do serisco no construtor da nossa classe  
    //"http" é um atributo criado da classe, do tipo HttpCliente
    constructor(private http: HttpClient)  {}
    
    public getOfertas(): Promise<Oferta[]>{
        //efetur uma requisição http
        //retornar uma promise Oferta[]
        return this.http.get(`${URL_API}/ofertas?destaque=true`)// isso aqui retorna um observable, é feito a conversao para promise abaixo
        .toPromise()//.toPromisse() faz a conversao para promise
        .then((resposta:any)=> resposta)
        
        //.then= recupera o parametro resolvido que sera armazenado em "resposta"
        //os objetos observable do angular eles sao baseados em uma biblioteca chamada rxjs=reactive extensions for java script
        //METODO .JSON() = É UM METODO DO OBJETO RESPOSTA QUE CONSISTE NA PROMESSA GERADA A PARTIR DA CONVERSAO DO OBSERVABLE, QUE RETORNA UM OBJETO LITERAL
    }
    
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`) 
        .toPromise()
        .then((resposta: any) => resposta)    
    }
    //estrutura: public=>privacidade getOfertasPorCategoria=> nome do metodo categoria:string=> vai receber um parametro do tipo string : Promise<Oferta[]> vai retornar uma promise array de Oferta
    // endereco http concatenado por uma variavel que vai se passada por parametro, que vai retornar a busca
    
    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any)=>{ 
            //console.log(resposta) vai retorna um objeto do tipo oferta
            return resposta[0]
        })
    }
    public getComoUsarOfertaPorId(id:number): Promise<string>{
      return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta:any)=>{
          return resposta[0].descricao
      })  
    }
    public getOndeFicaOfertaPorId(id:number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta[0].descricao
        })  
      }
}

























































/* public ofertas: Oferta[]= [ //um array com objetos pode ser escrito array<Oferta>= [conteudo]

{
    id: 1,
    categoria: "restaurante",
    titulo: "Super Burger",
    descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    anunciante: "Original Burger",
    valor: 29.89,
    destaque: true,
    imagens: [
        {url: "/assets/ofertas/1/img1.jpg"},
        {url: "/assets/ofertas/1/img2.jpg"},
        {url: "/assets/ofertas/1/img3.jpg"},
        {url: "/assets/ofertas/1/img4.jpg"}
    ]
},
{
    id: 2,
    categoria: "restaurante",
    titulo: "Cozinha Mexicana",
    descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    anunciante: "Mexicana",
    valor: 32.90,
    destaque: true,
    imagens: [
        {url: "/assets/ofertas/2/img1.jpg"},
        {url: "/assets/ofertas/2/img2.jpg"},
        {url: "/assets/ofertas/2/img3.jpg"},
        {url: "/assets/ofertas/2/img4.jpg"}
    ]
    
},
{
    id: 4,
    categoria: "diversao",
    titulo: "Estância das águas",
    descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    anunciante: "Estância das águas",
    valor: 31.90,
    destaque: true,
    imagens: [
        {url: "/assets/ofertas/3/img1.jpg"},
        {url: "/assets/ofertas/3/img2.jpg"},
        {url: "/assets/ofertas/3/img3.jpg"},
        {url: "/assets/ofertas/3/img4.jpg"},
        {url: "/assets/ofertas/3/img5.jpg"},
        {url: "/assets/ofertas/3/img6.jpg"}
    ]
}
]

public getOfertas(): Array<Oferta>{
    return this.ofertas
}
public getOfertas2(): Promise<Array<Oferta>>{// le-se promisse de array de oferta, pode ser escrito Promise<Oferta[]>{}
return new Promise((resolve,reject)=>{// o objeto primisse espera uma funcao de callback, ou seja uma ação
    
    let deu_certo = true
    if(deu_certo){
        // o resolve pega a informaçao e manda pro .then em home.comp
        setTimeout(()=>resolve(this.ofertas),3000) //a funcao() vai executar a funcao resolve e armazenar o retorno, fazendo que o return da funcaio seja passado como parametro para o settimeout
    }else{
        reject({codig_erro:404, mensagem_erro: 'errorrrrrr'})
    }
    
})

.then(( ofertas: Oferta[]) => { // aqui eu pego o resultado gerado acima para usalo novamente antes de retornar o valor para o promise
    console.log('then de teste')
    return ofertas
})
.then(( ofertas: Oferta[]) =>{
    console.log('segundo then')
    return new Promise((resolve2,reject2)=>{
        setTimeout(()=>{resolve2( ofertas)},3000)
    })
})
.then(( ofertas:Oferta[])=>{ 
    console.log('terceiro then executado apos 3 sergundos por que estava aguarando ')
    return ofertas
})


//algum tipo de processsamento que ao finalizar chama funcao resolve ou reject
//esse promisse ainda é um procedimento sincrono, pois nao tem latencia 

}*/


/*
export class OfertasService{
    public getOfertas(): Array<string> {
        let ofertas = ['oferta1','oferta2','oferta']
        return ofertas
    }
}
*/ 