import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css']
  // styles: ['h3{color: red}']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
      this.serverCreationStatus = 'Server was created!';
    } , 2000 );
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created and  init';
    //alert(this.serverCreationStatus);
    //document.write('Server was created and  init');
  }

}
