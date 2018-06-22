import { Point } from "./point";
import { Coords } from "./coords";

/**
 * Describe the points set for an hike
 */
export class Steps {

    public points : Point[];
  
    constructor() {
        this.points = [];
    }

    /**
     * Add a new point
     * @param desc point description
     * @param latitude 
     * @param longitude 
     */
    public add(desc: string, latitude: number, longitude: number) : void {
        const point = new Point(desc, latitude, longitude);
        this.points.push(point);
    }

    /**
     * Get a bool to know if there's step points in this object
     */
    public isEmpty() : boolean {
        return this.points.length === 0;
    }
}