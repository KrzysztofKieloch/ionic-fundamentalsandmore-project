import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemesPage } from '../memes/memes.page';
import { NotesPage } from '../notes/notes.page';
import HomePage from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'notes',
    component: NotesPage
  },
  {
    path: 'jokes',
    component: MemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
