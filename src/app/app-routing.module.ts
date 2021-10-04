import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobotSketchComponent } from './robot-sketch/robot-sketch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const routes: Routes = [
  { path: 'home-page', component: RobotSketchComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}