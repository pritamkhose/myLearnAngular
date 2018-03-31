///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  // templateUrl: './server.component.html',
  template: '<app-server></app-server><app-servers></app-servers>',
  styleUrls: ['./server.component.css']
  }
)
export class ServerComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
