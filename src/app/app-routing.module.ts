import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Rerouting root to home
  { path: 'home', component: IntroductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
