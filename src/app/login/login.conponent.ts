import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  currentUser!: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  file = null;

  fileselected(event: any) {
    var file = event.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = (event) => {
      console.log(event.target?.result);
    };
  }

  @ViewChild('fileSelector') fileSelector: any;

  onCreate() {
    try {
      var isFileSaverSupported = !!new Blob();
    } catch (e) {
      throw e;
    }

    //TODO move this to seperate file
    let config = {
      version: '0.0.1',
      users: [
        {
          user: 'THE_FIRST_ONE',
          appData: [
            {
              appname: 'TODO_APP',
              data: ['aaa', 'bbb', 'ccc'],
            },
          ],
        },
      ],
    };

    const bytes = new TextEncoder().encode(JSON.stringify(config));
    var file = new File([bytes], 'dairy.json', {
      type: 'text/plain;charset=utf-8',
    });
    FileSaver.saveAs(file);

    //Create new file on localsystem by using bootfile.json file stored in config
    //Display welcome alary and ask Username to save
  }

  onLoad() {
    //trigger input tag click event
    //Load and display data
  }
}
