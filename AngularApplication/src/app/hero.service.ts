import { Injectable } from '@angular/core';
import {Hero} from './hero/hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getNames(){
    return [new Hero("ashwin","121"),new Hero("balaji","122")];
  }
}
