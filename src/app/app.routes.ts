import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
