import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoupsiPage } from './soupsi.page';

const routes: Routes = [
  {
    path: '',
    component: SoupsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoupsiPageRoutingModule {}
