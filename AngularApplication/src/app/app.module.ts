import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero.service';
import { HeroExpComponent } from './hero/hero-exp/hero-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroExpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
