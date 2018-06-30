import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timer'})
export class TimerPipe implements PipeTransform {
    
  /**
   * Add a zero before timer numbers if needed (format: <0:0>)
   * @param value str timer value
   * @return new formated str value
   */
    public transform(value : string) : string {
        const str = value.split(':');
        for (let i = 0; i < str.length; i++) {
          if (str[i].length === 1) {
            str[i] = `0${str[i]}`;
          }
        }
        return `${str[0]}:${str[1]}`;
    }
}
