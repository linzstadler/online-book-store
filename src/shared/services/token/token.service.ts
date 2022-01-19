import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../../../pages/authentication/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class TokenService {


    constructor(private router: Router) {
    }

    checkToken() {
        return !!localStorage.getItem('online-store');

    }

    setToken(user: UserModel) {
        localStorage.setItem('online-store', JSON.stringify(user));
    }


    getToken() {
        const token = localStorage.getItem('online-store');
        if (token) {
            return JSON.parse(token);
        }
        this.removeToken();
        return null
    }

    removeToken() {
        localStorage.removeItem('online-store');
        this.router.navigateByUrl('/auth/login');

    }


}
