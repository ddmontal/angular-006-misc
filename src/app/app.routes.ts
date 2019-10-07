import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { ShowUserComponent } from './components/user/show-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'new', component: NewUserComponent },
      { path: ':id/edit', component: EditUserComponent },
      { path: ':id/show', component: ShowUserComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
