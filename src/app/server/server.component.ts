import { Component, OnInit } from '@angular/core';


@Component({

    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent implements OnInit {

    id: number = 12;
    isOnline: string = 'online';
    disableSaveButton: boolean = true;
    serverStatus: string = 'sever is full..';
    isClicked: boolean = false;
    servers:string[] = ['test','test 2','test 3'];

    constructor() {
        console.log('sever constructer');
        // this is the arrow function we can use this ES6 of javascript
        setTimeout(() => {
            this.disableSaveButton = false;
        }, 2000);
    }

    ngOnInit() {
        console.log("server ngOnInit");

    }

    // this method for the event binding 
    getServerStatus() {
        if (this.isOnline === 'online') {
            this.isOnline = 'offline';
        } else {
            this.isOnline = 'online';
        }
    }
    // this method for get Event data from user input
    getEnterdDetails(event: Event) {
        console.log(event);
        this.serverStatus = (<HTMLInputElement>event.target).value;
        console.log(this.serverStatus);
    }
    // this Test for *ngIf structrural directive 

    isThisButtonClicked(): boolean {
        return this.isClicked = true;

    }

    getColor(){
         return this.isOnline == 'online'   ? 'red' : 'yellow';
    }

    createServer(){
        this.servers.push('new server'+Math.random());
    }

}