export class reqParam {
    mandant: string;
    ukat: number;
    mids: any;
    bbox: string;
    width: number;
    height: number;
    z: number;
    cluster: number;
    _: any;

    constructor(
        mandant: string,
        ukat: number,
        bbox: string,
        width: number,
        height: number,
        z: number,
        cluster: number,
        mids ?,
        _  ?,
    ) {
        this.mandant = mandant;
        this.ukat = ukat;
        this.mids = mids;
        this.bbox = bbox;
        this.width = width;
        this.height = height;
        this.z = z;
        this.cluster = cluster;
        this._ = _;
    }
}
