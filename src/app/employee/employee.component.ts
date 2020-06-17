import { Component, OnInit, Host, SkipSelf, Self, Optional } from '@angular/core';
import { LoginService } from '../login.service';
import { NewloginService } from '../newlogin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [LoginService]
})
export class EmployeeComponent implements OnInit {

  constructor(@Optional()
  @Self() private loginService: NewloginService) {
  }

  ngOnInit(): void {
    if (this.loginService) {
      this.loginService.login();
    }

  }

}
