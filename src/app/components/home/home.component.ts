import { Component, OnInit, OnDestroy } from '@angular/core';

declare const Webflow: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    Webflow.ready();
  }

  ngOnDestroy() {
    Webflow.destroy();
  }

}

