import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, Response,URLSearchParams} from '@angular/http';
// import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
declare var xml2json: any;
declare var XMLHttpRequest: any;


@Injectable()
export class ParkingsService   implements OnInit  {
  gitUrl = 'http://gis4oldenburg.oldenburg.de/viewer/php/getmarker.php';
  mandant= 'oldenburg';
  ukat= '364';
  mids= '';
  bbox = '8.196251392364502,53.147491022903736,8.236420154571533,53.13409189508958';
  width= '1872';
  height= '1041';
  z= '16';
  cluster= '1';
  _= '';
  constructor(private http: Http) { }
  ngOnInit() {}

  getParks() {
  return this.http.get('assets/pls.xml')
    .map(res => JSON.parse(xml2json(res.text(), '  ')));
  }

  getParksFBehinderte() {

    let params = new URLSearchParams();
    params.set('mandant', this.mandant); 
    params.set('ukat', this.ukat); 
    params.set('mids', this.mids); 
    params.set('bbox', this.bbox); 
    params.set('width', this.width); 
    params.set('height', this.height); 
    params.set('z', this.z); 
    params.set('cluster', this.cluster); 
    params.set('_', this._); 

     console.log('start request ');
    // this.http.post(this.gitUrl, { search: params })
    //        .map(result => {
    //          result.json()
    //           console.log('start respons ');
    //          console.log(result);
    //          // return result; // doesn't work
    //        });
// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "http://gis4oldenburg.oldenburg.de/viewer/php/getmarker.php?mandant=oldenburg&ukat=364&mids=&bbox=8.196251392364502%2C53.147491022903736%2C8.236420154571533%2C53.13409189508958&width=1872&height=1041&z=16&cluster=1&_=");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("postman-token", "6b264047-cde5-3cad-7136-898d31f283f8");

// xhr.send(data);


  }

 private handleError (error: Response | any) {
   console.log('ERROR WITH REQUEST');
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}