import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class ProgressSpinnerService implements HttpInterceptor {
  public progress$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const reportingRequest = req.clone({reportProgress: true});
    const handle = next.handle(reportingRequest);

    return handle.do((event: HttpEvent<T>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.progress$.next(true);
          break;
        case HttpEventType.DownloadProgress:
        case HttpEventType.UploadProgress:
          if (event.total) {
            this.progress$.next(true);
          }
          break;
        case HttpEventType.Response:
          this.progress$.next(false);
          break;
      }
    });
  }
}