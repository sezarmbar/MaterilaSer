import {Injectable,OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
// import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';
import { ReplaySubject } from 'rxjs';

declare var xml2json:any;


@Injectable()
export class ParkingsService   implements OnInit  {


  constructor(private http: Http) { }
  ngOnInit() {}
  getParks() {
  return this.http.get('assets/pls.xml')
    .map(res => JSON.parse(xml2json(res.text(),'  ')));
  }
}