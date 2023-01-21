import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../home/home.module';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'home',
    component: HomePageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}
