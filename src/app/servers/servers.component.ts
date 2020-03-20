import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    console.log('constructer servers');
   }

  ngOnInit() {
    console.log('ngOnInit of servers');
  }

}
