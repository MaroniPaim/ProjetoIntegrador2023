import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'quero-comecar',
    loadChildren: () => import('./quero-comecar/quero-comecar.module').then( m => m.QueroComecarPageModule)
  },
  {
    path: 'soupsi',
    loadChildren: () => import('./soupsi/soupsi.module').then( m => m.SoupsiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
