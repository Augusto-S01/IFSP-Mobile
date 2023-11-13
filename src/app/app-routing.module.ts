import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'criar-nota',
    loadChildren: () => import('./criar-nota/criar-nota.module').then( m => m.CriarNotaPageModule)
  },
  {
    path: 'deletar-nota',
    loadChildren: () => import('./deletar-nota/deletar-nota.module').then( m => m.DeletarNotaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
