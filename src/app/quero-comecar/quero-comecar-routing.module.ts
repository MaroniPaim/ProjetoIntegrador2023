import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueroComecarPage } from './quero-comecar.page';

const routes: Routes = [
  {
    path: '',
    component: QueroComecarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueroComecarPageRoutingModule {}
