import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.loginService.login();
  }

}
