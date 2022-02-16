import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { SliderComponent } from './Home/slider/slider.component';
import { LearningComponent } from './Home/learning/learning.component';
import { TeamComponent } from './Home/team/team.component';
import { PlaylistComponent } from './Home/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    LearningComponent,
    TeamComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
