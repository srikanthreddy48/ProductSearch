import { Injectable } from '@angular/core';
import { UIError } from '../../models/UIError';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorManager {
    logError= (error: any) => {
        console.log(error);
        const uiError = new UIError('Error Occured');
        return Observable.throw(uiError);
    }
}
