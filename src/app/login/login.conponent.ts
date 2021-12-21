import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({ selector: 'app-login', templateUrl: 'login.component.html' })
export class AppComponent {
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
}
