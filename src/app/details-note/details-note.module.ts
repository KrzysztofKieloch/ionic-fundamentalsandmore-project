import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsNotePageRoutingModule } from './details-note-routing.module';

import { DetailsNotePage } from './details-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsNotePageRoutingModule
  ],
  declarations: [DetailsNotePage]
})
export class DetailsNotePageModule {}
