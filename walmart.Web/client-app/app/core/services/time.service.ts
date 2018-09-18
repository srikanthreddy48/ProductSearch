import {Injectable} from '@angular/core'

@Injectable()
export class TimeService {
    whatTime() {
        const today = new Date();
        const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', timeOptions);
    }
}
