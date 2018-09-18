import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard {

  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  constructor(private router: Router) { }
}
