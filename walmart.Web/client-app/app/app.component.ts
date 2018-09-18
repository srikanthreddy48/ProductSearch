import { Component, ViewEncapsulation, ElementRef, ChangeDetectionStrategy, Renderer2, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import {SideMenuChangeService} from './core/components/sidemenu/sidemenu-change.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'nee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '_app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Walmart';
  public currentTime = new Date().toString();

  constructor(public router: Router,
              private _element: ElementRef,
              private http: HttpClient,
              private sidemenuService: SideMenuChangeService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              public matIconRegistry: MatIconRegistry,) {

    const today = new Date();
    const timeOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    this.currentTime = today.toLocaleDateString('en-US', timeOptions);
  }

   ngOnInit() {
   }
}
