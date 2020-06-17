import { Injectable } from '@angular/core';
import { LoginService } from './login.service';


export class DependetseviceService {
  constructor(private loginStatus: boolean) {
    console.log(loginStatus);
   }
}


export function loginFactory(loginSevice: LoginService) {
  return new DependetseviceService(loginSevice.login());
}
