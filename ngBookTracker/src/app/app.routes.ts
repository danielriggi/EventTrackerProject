import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'update', component: BookUpdateComponent },
  { path: 'update/:id', component: BookUpdateComponent },
  { path: 'create', component: BookAddComponent },
  { path: '**', component: NotFoundComponent}

];
