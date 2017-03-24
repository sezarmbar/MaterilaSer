export class Markers {
  ukat   : number;
  lat   : number;
  lon   : number;
  id  : number;
  file : string;
  infoIsOpen:boolean;
  isOpen    :boolean;

  constructor(  ukat : number,
                lat : number,
                lon : number,
                id: number,
                file : string,
              ) {
      this.ukat   = ukat;
      this.lat   = lat;
      this.lon   = lon;
      this.id  = id;
      this.file = file;
      this.infoIsOpen = false;
      this.isOpen    = true;
      }
}
