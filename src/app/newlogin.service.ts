import { Injectable, Inject } from '@angular/core';
import { CONFIG_TOKEN } from './config.service';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class NewloginService {

  constructor(@Inject(CONFIG_TOKEN) private tokenService: Config) {
    console.log(tokenService.apiEndPoint);
   }


   login() {
    return false;
  }

  logout() {
    return true;
  }

}
