import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroes2;
  constructor(private heroService:HeroService) {
    this.heroes2=heroService.getNames();
   }

  ngOnInit() {
  }
  hero={name:"Ash"};
  call(heros){
    alert(heros.name);
  }
  emittedFn(arg){
this.heroes2=arg;
  }
comp={'font-size':5};
}
