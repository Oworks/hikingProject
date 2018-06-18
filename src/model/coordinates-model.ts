export class CoordinatesModel {

    public points : Array<any>;
  
    constructor() {
        this.points = [];
    }

    public add(latitude: number, longitude: number) : void {
        this.points.push({
            lattitude: latitude,
            longitude: longitude
        });
    }
}