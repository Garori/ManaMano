import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';


// Main Page e Dialog
import { AvisosComponent } from './avisos.component';


const routes: Routes = [
  {
    path: '',
    component: AvisosComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardComponent
  ],
  declarations: [
    CardComponent,

  ],
  entryComponents:[

  ],
  providers:[

  ]
})

export class AvisosModule {}
