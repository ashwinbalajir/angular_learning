import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { throwIfAlreadyLoaded } from 'app/core/module-import-guard';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    //  {provide:LoggerService,useClass:PlainLoggerService}, DataService],
  //  providers: [{provide:LoggerService,useValue:{
  //    log:(message)=>console.log('created using useValue',message)
  //  }
// }
LoggerService, DataService],

})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
