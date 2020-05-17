import { Observable, interval, onErrorResumeNext } from 'rxjs';

export class TimeDuration {

    private timeTicker: Observable<any> = null;

    constructor(public seconds: number,
        public minutes: number,
        public hours: number) { }

    AddSeconds(sec) {

        this.seconds += sec;
        while (this.seconds > 60) {
            this.AddMinutes(1);
            this.seconds -= 60;
        }

        while (this.seconds < 0) {
            this.AddMinutes(-1);
            this.seconds += 60;
        }

        return this;
    }

    AddMinutes(mins) {
        this.minutes += mins;
        while (this.minutes > 60) {
            this.hours += 1;
            this.minutes -= 60;
        }

        while (this.minutes < 0) {
            this.AddHours(-1);
            this.minutes += 60;
        }

        return this;
    }

    AddHours(hours) {
        this.hours += hours;

        if (this.hours<0){
            this.hours = 0;
        }

        return this;
    }

    StartTimer() {
        this.timeTicker = new Observable<any>(observer => {
            setInterval(() => {
                observer.next({
                    seconds: this.AddSeconds(-1),
                    minutes: this.minutes,
                    hours: this.hours
                });
            }, 1000)
        });

        return this.timeTicker;
    }

    StopTimer() {
        this.timeTicker = null;

        return this;
    }


    toString(){
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }


}
