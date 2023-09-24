import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YsfComponent } from './ysf/ysf.component';


const routes: Routes = [
  { path: 'branding', component: YsfComponent },
  { path: '',   redirectTo: '/gallery', pathMatch: 'full' },
  // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
