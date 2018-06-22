import { Coords } from "./coords";

/**
 * Describe an hike point on the map
 */
export class Point {

    public marker : any;

    public coords : Coords;

    constructor(public desc : string, latitude : number, longitude : number) {
        this.coords = new Coords(latitude, longitude);
    }

    public equals(other : Point) : boolean {
        return other.coords === this.coords
            && other.desc === this.desc;
    }
}