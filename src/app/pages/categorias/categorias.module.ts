import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCardsComponent } from 'src/app/components/categoria-cards/categoria-cards.component';


// Main Page e Dialog
import { CategoriasComponent } from './categorias.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CategoriaCardsComponent
  ],
  declarations: [
    CategoriaCardsComponent,

  ],
  entryComponents:[

  ],
  providers:[

  ]
})

export class CategoriasModule {}
