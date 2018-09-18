import {Component, OnInit, ViewChild} from '@angular/core';
import {ProgressSpinnerService} from './progress-spinner.service';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'progress-spinner',
  templateUrl: 'progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})

export class ProgressSpinnerComponent implements OnInit {
  @ViewChild(LoaderComponent) loader: LoaderComponent;

  public show: boolean;

  constructor(private interceptor: ProgressSpinnerService) {
  }

  ngOnInit() {
    this.interceptor.progress$.subscribe(progress => {
      this.setMode(progress);
      return progress;
    });
  }

  setMode(show: boolean) {
    this.loader.visible = show;
    this.show = show;
  }
}