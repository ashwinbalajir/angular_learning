import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import {DataService} from 'app/services/data.service';
import { BadgeLoggerService } from '../services/badge-logger.service';
@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: [],
  providers:[BadgeLoggerService]
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;
  currentBadge:String;
  constructor(private route: ActivatedRoute,private dataService:DataService,
  private badgeReader:BadgeLoggerService) { }

  ngOnInit() {
    let readerID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedReader =this.dataService.getAllReaderById(readerID);
    this.currentBadge=this.badgeReader.getReaderBadge(this.selectedReader.totalMinutesRead);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }
}
