export class CoordinatesModel {

    public points = []
  
    constructor(latitude: number, longitude: number) {
        this.add(latitude, longitude);
    }

    public add(latitude: number, longitude: number) : void {
        this.points.push({
            lattitude: latitude,
            longitude: longitude
        });
    }
  }