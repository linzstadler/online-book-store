import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly endpoint = `${environment.serverUrl}/users`

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        console.log('email', email)
        return this.http.get<[UserModel]>(`${this.endpoint}?email=${email}&password=${password}`)
            .pipe(map(user => {
                // this.tokenService.setToken(user)
                return user;
            }));
    }
    register(user: UserModel) {
        return this.http.post<UserModel>(`${this.endpoint}`, user);
    }



    logout() {
        // this.tokenService.removeToken();
    }
}
