import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: string[] = ['test'];

  constructor() {
    console.log('constructer servers');
  }

  ngOnInit() {
    console.log('ngOnInit of servers');
  }

  createServer() {
    this.servers.push('new server' + Math.random());
  }
}
