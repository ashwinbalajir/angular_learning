import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hero-exp',
  templateUrl: './hero-exp.component.html',
  styleUrls: ['./hero-exp.component.css']
})
export class HeroExpComponent implements OnInit {
 message;
  @Input()
  heroPass;
  @Output()
  heroEmitter=new EventEmitter();
  
  constructor() {
    console.log("constructor",this.heroPass);

   }

  ngOnInit() {
    console.log("oInit",this.heroPass);

  }
  callfn(){
    console.log("inside callfn",this.heroPass);
  }
emitterfn(){
  if(this.heroPass.length===0){
    this.message="No more data"
  }else{
    this.heroPass.splice(0,1);
  this.heroEmitter.emit(this.heroPass);
  }
  
}


}
