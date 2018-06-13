export class HikingModel {

  public description : string;

  constructor(public name: string, public start: any, public end: any) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.describe();
  }

  /**
   * Format description
   */
  private describe() : void {
    const get = coords => {
      return 'Latitude : ' + coords.latitude + ' - Longitude : ' + coords.longitude;
    }
    this.description = 'FROM ' + get(this.start) + ' TO ' + get(this.end);
  }
}
