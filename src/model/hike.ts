import { Steps } from "./steps";
import { Point } from "./point";

/**
 * Describe an hike
 * Contains a steps objet, with all the step points of the hike
 */
export class Hike {

  public description : string;

  constructor(public name: string, public start: Point, public end: Point, public steps: Steps) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.steps = steps;
    this.describe();
  }

  /**
   * Format description of the hike using coordinates
   */
  private describe() : void {
    const get = coords => {
      return 'Latitude : ' + coords.latitude + ' - Longitude : ' + coords.longitude;
    }
    this.description = 'FROM ' + get(this.start) + ' TO ' + get(this.end);
  }
}
