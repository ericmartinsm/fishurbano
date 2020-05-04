import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestaurantesComponent} from './restaurantes/restaurantes.component'
import {DiversaoComponent} from './diversao/diversao.component'
import {OfertaComponent} from './oferta/oferta.component'
import {ComoUsarComponent} from './oferta/comoUsar/comoUsar.component'
import {OndeFicaComponent} from './oferta/ondeFica/ondeFica.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'diversao', component: DiversaoComponent}, 
    { path: 'oferta', component: OfertaComponent},
    { path: 'oferta/:id', component: OfertaComponent,
    children: [
        {path: '', component: ComoUsarComponent},
        {path: 'comoUsar', component: ComoUsarComponent},
        {path: 'ondeFica', component: OndeFicaComponent}
    ]}, //   /:id é para indicar o parametro que vai ser recebido, id é um atributo do objeto
]