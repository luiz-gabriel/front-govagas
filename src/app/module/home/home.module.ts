import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CardVagaComponent } from 'src/app/components/card-vaga/card-vaga.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardVagaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CardVagaComponent
  ]
})
export class HomeModule { }
