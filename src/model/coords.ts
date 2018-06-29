/**
 * Describe coordinates
 */
export class Coords {

    /**
     * Coords formated for google api
     */
    public googleCoords : object;

    constructor(public latitude : number, public longitude : number) {
        this.googleCoords = {
            lat: latitude,
            lng: longitude
        }
    }
}