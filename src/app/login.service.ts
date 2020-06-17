import { Injectable, Inject } from '@angular/core';
import { CONFIG_TOKEN } from './config.service';
import { Config } from './config';
import { NewloginService } from './newlogin.service';

@Injectable({
  providedIn: 'any',
  useExisting: NewloginService
})
export class LoginService {

  constructor(@Inject(CONFIG_TOKEN) private tokenService: Config) {
    console.log(tokenService.apiEndPoint);
   }

  login() {
    return true;
  }

  logout() {
    return true;
  }
}
