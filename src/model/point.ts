/**
 * Describe an hike point on the map
 */
export class Point {

    constructor(public desc, public latitude, public longitude) {
        this.desc = desc;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}