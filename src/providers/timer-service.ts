import { Injectable } from '@angular/core';

/**
 * Timer service
 * Handle timer management
 */
@Injectable()
export class TimerService {

    private _sec = 0;
    private _min = 0;

    private _timerTask;

    /**
     * Start timer, updating time value every second
     */
    public start() : void {
        const iteration = () => {
            if (this._sec === 59) {
                this._sec = 0;
                this._min++;
            } else {
                this._sec++;
            }
        }

        this._timerTask = setInterval(iteration, 1000);
    }

    /**
     * Stop the timer, keep min and sec values
     */
    public stop() : void {
        clearInterval(this._timerTask);
    }

    /**
     * Reset min and sec values to zero
     */
    public reset() : void {
        this.stop();
        this._sec = this._min = 0;
    }

    /**
     * Get current time value
     * @return describer string
     */
    public current() : string {
        return `${this._min}:${this._sec}`;
    }
}