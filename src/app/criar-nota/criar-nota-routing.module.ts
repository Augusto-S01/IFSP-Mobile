import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarNotaPage } from './criar-nota.page';

const routes: Routes = [
  {
    path: '',
    component: CriarNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarNotaPageRoutingModule {}
