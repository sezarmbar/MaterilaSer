import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
// import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Markers, Strassensperrung } from './index';

declare var xml2json: any;


@Injectable()
export class ParkingsService implements OnInit {
  markerUrl = 'http://gis4oldenburg.oldenburg.de/viewer/php/getmarker.php';
  infoMarkerUrl = 'http://gis4oldenburg.oldenburg.de/viewer/php/ajax_control.php';
  ajax_control = 'http://gis4oldenburg.oldenburg.de/viewer/php/ajax_control.php'
  constructor(private http: Http) { }
  ngOnInit() { }

  getParks() {
    return this.http.get('assets/pls.xml')
      .map(res => JSON.parse(xml2json(res.text(), '  ')));
  }
  private handleError(error: Response | any) {
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
      .map((res: Response) => {
        var markers: Markers[] = [];
        let marker: Markers;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          marker = new Markers(obj.ukat, obj.lat, obj.lon, obj.id, obj.file);
          markers.push(marker);
        }
        return markers;
      })
      .catch(this.handleError);

  }
  getFreiParkPlatz() {
    let reqParam = {
      mandant: 'oldenburg',
      ukat: '78',
      mids: '',
      bbox: '8.179707527160645,53.15047661827499,8.222408294677734,53.12702381283486',
      width: '995',
      height: '910.9999999990687',
      z: '15',
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
      .map((res: Response) => {
        var markers: Markers[] = [];
        let marker: Markers;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          marker = new Markers(obj.ukat, obj.lat, obj.lon, obj.id, obj.file);
          markers.push(marker);
        }
        return markers;
      })
      .catch(this.handleError);
  }

  getParkPlatz() {
    let reqParam = {
      mandant: 'oldenburg',
      ukat: '14',
      mids: '',
      bbox: '8.189889192581177,53.15153182216292,8.243812322616577,53.132946146504004',
      width: '2513',
      height: '1444',
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
      .map((res: Response) => {
        var markers: Markers[] = [];
        let marker: Markers;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          marker = new Markers(obj.ukat, obj.lat, obj.lon, obj.id, obj.file);
          markers.push(marker);
        }
        return markers;
      })
      .catch(this.handleError);
  }

  getParkHause() {
    let reqParam = {
      mandant: 'oldenburg',
      ukat: '77',
      mids: '',
      bbox: '8.188923597335815,53.1497860033164,8.231903314590454,53.136941114903514',
      width: '2003',
      height: '998',
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
      .map((res: Response) => {
        var markers: Markers[] = [];
        let marker: Markers;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          marker = new Markers(obj.ukat, obj.lat, obj.lon, obj.id, obj.file);
          markers.push(marker);
        }
        return markers;
      })
      .catch(this.handleError);
  }
  getInfoMarker(id) {
    const reqParam = {
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
      .map((res: Response) => res.text())
      .catch(this.handleError);

  }


  getStrassensperrung() {
    let reqParam = {
      functionId: '4',
      catId: '388',
      gtyp: '2',
      mandant: 'oldenburg',
      _: '',
    };
    const params = new URLSearchParams();
    params.set('mandant', reqParam.mandant);
    params.set('functionId', reqParam.functionId);
    params.set('catId', reqParam.catId);
    params.set('gtyp', reqParam.gtyp);
    params.set('_', reqParam._);

    return this.http.get(this.ajax_control, { search: params })
      .map((res: Response) => {
        var lines: Strassensperrung[] = [];
        let line: Strassensperrung;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          line = new Strassensperrung(obj.gtyp, obj.id, obj.pos, obj.stcolor, obj.stopacity, obj.stweight);
          lines.push(line);
        }

        return this.unique(lines);
      })
      .catch(this.handleError);
  }

  getGrosseUmleitungen() {
    let reqParam = {
      functionId: '4',
      catId: '391',
      gtyp: '2',
      mandant: 'oldenburg',
      _: '',
    };
    const params = new URLSearchParams();
    params.set('mandant', reqParam.mandant);
    params.set('functionId', reqParam.functionId);
    params.set('catId', reqParam.catId);
    params.set('gtyp', reqParam.gtyp);
    params.set('_', reqParam._);

    return this.http.get(this.ajax_control, { search: params })
      .map((res: Response) => {
        var lines: Strassensperrung[] = [];
        let line: Strassensperrung;
        // const markers :Markers[]=res.json(); return markers;
        for (let obj of res.json()) {
          line = new Strassensperrung(obj.gtyp, obj.id, obj.pos, obj.stcolor, obj.stopacity, obj.stweight);
          lines.push(line);
        }

        return this.unique(lines);
      })
      .catch(this.handleError);
  }

  unique(sl) {
    var out = [];
    for (var i = 0, l = sl.length; i < l; i++) {
      var unique = true;
      for (var j = 0, k = out.length; j < k; j++) {
        if ((sl[i].id === out[j].id)) {
          unique = false;
        }
      }
      if (unique) {
        out.push(sl[i]);
      }
    }
    return out;
  }
}