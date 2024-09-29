import {Injectable} from "@angular/core";
import {AuthPostDto} from "../dtos/auth/authPostDto";
import {AuthGetDto} from "../dtos/auth/authGetDto";
import {Observable} from "rxjs";
import {RegisterPostDto} from "../dtos/auth/registerPostDto";
import {AbstractApiService} from "./abstract.api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends AbstractApiService {

  authenticate(body: AuthPostDto): Observable<AuthGetDto> {
    return this.post<AuthGetDto>(`auth/authenticate`, body, true);
  }

  register(body: RegisterPostDto): Observable<AuthGetDto> {
    body.role = 'USER';
    return this.post<AuthGetDto>(`auth/register`, body, true);
  }
}
