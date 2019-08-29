import { Component, OnInit, OnDestroy } from '@angular/core';

declare const Webflow: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  nav_selector1 = 1;

  constructor() { }

  ngOnInit() {
    Webflow.ready();
  }

  ngOnDestroy() {
    Webflow.destroy();
  }

}

