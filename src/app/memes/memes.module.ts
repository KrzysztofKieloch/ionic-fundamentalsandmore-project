import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemesPageRoutingModule } from './memes-routing.module';

import { MemesPage } from './memes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemesPageRoutingModule
  ],
  declarations: [MemesPage]
})
export class MemesPageModule {}
