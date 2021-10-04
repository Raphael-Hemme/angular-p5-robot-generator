import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobotGeneratorUiComponent } from './robot-generator-ui/robot-generator-ui.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const routes: Routes = [
  { path: 'home-page', component: RobotGeneratorUiComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}