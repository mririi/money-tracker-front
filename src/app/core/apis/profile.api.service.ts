import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ProfileGetDto} from 'src/app/core/dtos/profil/profileGetDto';
import {ProfileTokenPostDto} from "../dtos/profil/profileTokenPostDto";
import {ProfilePatchDto} from "../dtos/profil/profilePatchDto";
import {AbstractApiService} from "./abstract.api.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService extends AbstractApiService {
  getProfileByToken(profileTokenPostDto: ProfileTokenPostDto): Observable<ProfileGetDto> {
    return this.post<ProfileGetDto>(`profiles/profile`, profileTokenPostDto);
  }

  updateBalance(profileId: number, balance: number): Observable<void> {
    const httpParams = new HttpParams().set('balance', balance as any);
    return this.put<void>(`profiles/${profileId}/balance`, null, httpParams);
  }

  updateProfile(patch: ProfilePatchDto, profileId: number): Observable<void> {
    return this.patch<void>(`profiles/${profileId.toString()}`, patch);
  }
}
