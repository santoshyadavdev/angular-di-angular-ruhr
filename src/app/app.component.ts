import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { CONFIG_TOKEN } from './config.service';
import { Config } from './config';
import { LoginfactroryService } from './loginfactrory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulardi';

  constructor(private loginService: LoginService,
    @Inject(CONFIG_TOKEN) private tokenService: Config,
    private factory: LoginfactroryService) { }

  ngOnInit() {
    console.log(this.loginService.login());
    console.log(this.tokenService.apiEndPoint);
  }

}
