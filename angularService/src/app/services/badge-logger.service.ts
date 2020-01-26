import { Injectable } from '@angular/core';

@Injectable()
export class BadgeLoggerService {
  getReaderBadge(val:number):String{
    if(val>5000){
        return 'Book Work';
    }else if(val>2500){
      return 'Page Turner';
  }else{
    return 'Beginner';
  }
    
  }
  constructor() { }

}
