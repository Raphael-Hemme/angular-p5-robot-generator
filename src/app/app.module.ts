import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RobotSketchComponent } from './robot-generator-ui/robot-sketch/robot-sketch.component';
import { RobotSettingsComponent } from './robot-generator-ui/robot-settings/robot-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RobotGeneratorUiComponent } from './robot-generator-ui/robot-generator-ui.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RobotSketchComponent,
    RobotSettingsComponent,
    PageNotFoundComponent,
    RobotGeneratorUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
