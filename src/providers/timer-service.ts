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
     * @return service instance
     */
    public start() : TimerService {
        const iteration = () => {
            if (this._sec === 59) {
                this._sec = 0;
                this._min++;
            } else {
                this._sec++;
            }
        }

        this._timerTask = setInterval(iteration, 1000);
        return this;
    }

    /**
     * Stop the timer, keep min and sec values
     * @return service instance
     */
    public stop() : TimerService {
        clearInterval(this._timerTask);
        return this;
    }

    /**
     * Reset min and sec values to zero
     * @return service instance
     */
    public reset() : TimerService {
        this.stop();
        this._sec = this._min = 0;
        return this;
    }

    /**
     * Get current time value
     * @return describer string
     */
    public current() : string {
        return `${this._min}:${this._sec}`;
    }
}