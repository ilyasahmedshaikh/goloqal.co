import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ForYouComponent } from './for-you.component';

const routes: Routes = [
  { path: '', component: ForYouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForYouRoutingModule { }
