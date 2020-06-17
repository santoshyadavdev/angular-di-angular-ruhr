import { Injectable } from '@angular/core';
import { loginFactory } from './dependetsevice.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
  useFactory: loginFactory,
  deps: [LoginService]
})
export class LoginfactroryService {

  constructor() { }

}
