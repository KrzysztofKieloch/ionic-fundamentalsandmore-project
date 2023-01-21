import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemesPage } from './memes.page';

const routes: Routes = [
  {
    path: '',
    component: MemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemesPageRoutingModule {}
