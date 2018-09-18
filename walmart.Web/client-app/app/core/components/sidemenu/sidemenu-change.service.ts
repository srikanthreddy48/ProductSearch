import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideMenuChangeService {
    private subject = new Subject<string>();

    sendMenuChange(message: string) {
        this.subject.next(message);
    }

    clearMenuChange() {
        this.subject.next();
    }

    getMenuChange(): Observable<string> {
        return this.subject.asObservable();
    }
}
