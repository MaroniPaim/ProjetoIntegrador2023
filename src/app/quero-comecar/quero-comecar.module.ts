import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueroComecarPageRoutingModule } from './quero-comecar-routing.module';

import { QueroComecarPage } from './quero-comecar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueroComecarPageRoutingModule
  ],
  declarations: [QueroComecarPage]
})
export class QueroComecarPageModule {}
