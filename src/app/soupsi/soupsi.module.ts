import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoupsiPageRoutingModule } from './soupsi-routing.module';

import { SoupsiPage } from './soupsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoupsiPageRoutingModule
  ],
  declarations: [SoupsiPage]
})
export class SoupsiPageModule {}
