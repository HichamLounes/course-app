import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    loggedIn: boolean = false;

    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
    isAuth() {
        return this.loggedIn;
    }
}