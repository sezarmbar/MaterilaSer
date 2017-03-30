export class Strassen {
  gtyp   : number;
  id  : number;
  pos : string;
  stcolor : string;
  stopacity:string;
  stweight    :string;

  constructor(  gtyp : number,
                id : number,
                pos : string,
                stcolor: string,
                stopacity : string,
                stweight : string,
              ) {
      this.gtyp   = gtyp;
      this.id   = id;
      this.pos  = pos;
      this.stcolor = stcolor;
      this.stopacity = stopacity;
      this.stweight    = stweight;
      }
}
