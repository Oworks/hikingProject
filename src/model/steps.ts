import { Point } from "./point";

/**
 * Describe the points set for an hike
 */
export class Steps {

    public points : Array<Point>;
  
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
        const p = new Point(desc, latitude, longitude);
        this.points.push(p);
    }

    /**
     * Get a bool to know if there's step points in this object
     */
    public isEmpty() : boolean {
        return this.points.length === 0;
    }
}