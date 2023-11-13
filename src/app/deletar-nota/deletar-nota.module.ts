import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletarNotaPageRoutingModule } from './deletar-nota-routing.module';

import { DeletarNotaPage } from './deletar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletarNotaPageRoutingModule
  ],
  declarations: [DeletarNotaPage]
})
export class DeletarNotaPageModule {}
