import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
@Injectable({
    providedIn: 'root',
})
export class Csvexporter {
    csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Your Heroes List :',
        useBom: true,
        noDownload: false,
        headers: ["Hero ID", "Hero Nick","Hero Image Link", "Hero Profesion"]
      };
      downloadCSV(heroes:Hero[]){
        //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
        new  AngularCsv(heroes, "HeroesList", this.csvOptions);
      }
}
