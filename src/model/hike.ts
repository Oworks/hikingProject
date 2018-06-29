import { Steps } from "./steps";
import { Point } from "./point";

/**
 * Describe an hike
 * Contains a steps objet, with all the step points of the hike
 */
export class Hike {

  constructor(public name: string, public start: Point, public end: Point, public steps: Steps) {}

  /**
   * Format description of the hike using coordinates
   * @return description
   */
  public describe() : string {
    const get = coords => {
      return `lat : ${parseFloat(coords.latitude).toFixed(2)} - long : ${parseFloat(coords.longitude).toFixed(2)}`;
    }
    return `FROM ${get(this.start.coords)} TO ${get(this.end.coords)}`;
  }
}