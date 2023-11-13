import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletarNotaPage } from './deletar-nota.page';

const routes: Routes = [
  {
    path: '',
    component: DeletarNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletarNotaPageRoutingModule {}
