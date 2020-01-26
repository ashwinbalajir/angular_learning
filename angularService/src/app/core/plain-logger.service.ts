import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class PlainLoggerService implements LoggerService {
  log(message: any): void {

    console.log('Inside plain logger',message);
  }

  constructor() { }

}
