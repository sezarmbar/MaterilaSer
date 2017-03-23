import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
// import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
declare var xml2json: any;


@Injectable()
export class ParkingsService   implements OnInit  {
  markerUrl = 'http://gis4oldenburg.oldenburg.de/viewer/php/getmarker.php';
  infoMarkerUrl = 'http://gis4oldenburg.oldenburg.de/viewer/php/ajax_control.php';
  constructor(private http: Http) { }
  ngOnInit() {}

  getParks() {
  return this.http.get('assets/pls.xml')
    .map(res => JSON.parse(xml2json(res.text(), '  ')));
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


  getParksFBehinderte() {
    let reqParam = {
      mandant: 'oldenburg',
      ukat: '364',
      mids: '',
      bbox: '8.196251392364502,53.147491022903736,8.236420154571533,53.13409189508958',
      width: '1872',
      height: '1041',
      z: '16',
      cluster: '1',
      _: '',
    };
    const params = new URLSearchParams();
    params.set('mandant', reqParam.mandant);
    params.set('ukat', reqParam.ukat);
    params.set('mids', reqParam.mids);
    params.set('bbox', reqParam.bbox);
    params.set('width', reqParam.width);
    params.set('height', reqParam.height);
    params.set('z', reqParam.z);
    params.set('cluster', reqParam.cluster);
    params.set('_', reqParam._);

   return this.http.get(this.markerUrl, { search: params })
    .map((res: Response) => res.json())
    .catch(this.handleError);

  }



  getInfoMarker(id) {
    let reqParam = {
      mandant: 'oldenburg',
      functionId: '5',
      markerId: id,
      site: 'gis4oldenburg.oldenburg.de/oldenburg/',
      _: '',
    };
    const params = new URLSearchParams();
    params.set('markerId', id);
    params.set('mandant', reqParam.mandant);
    params.set('functionId', reqParam.functionId);
    params.set('site', reqParam.site);
    params.set('_', reqParam._);

   return this.http.get(this.infoMarkerUrl, { search: params })
    .map((res: Response) => res.json())
    .catch(this.handleError);

  }

 
}