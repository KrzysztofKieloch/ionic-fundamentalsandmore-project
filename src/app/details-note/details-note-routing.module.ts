import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsNotePage } from './details-note.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsNotePageRoutingModule {}
