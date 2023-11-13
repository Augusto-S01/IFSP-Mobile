import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarNotaPageRoutingModule } from './criar-nota-routing.module';

import { CriarNotaPage } from './criar-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarNotaPageRoutingModule
  ],
  declarations: [CriarNotaPage]
})
export class CriarNotaPageModule {}
