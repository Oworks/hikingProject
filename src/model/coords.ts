/**
 * Describe coordinates
 */
export class Coords {

    constructor(public latitude : number, public longitude : number) {}

    /**
     * Get coords formated for google api
     * @return an object with lat and lng properties
     */
    public googleCoords() : any {
        return {
            lat: this.latitude,
            lng: this.longitude
        }
    }
}