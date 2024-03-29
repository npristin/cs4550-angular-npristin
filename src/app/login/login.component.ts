import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private router: Router, private service: UserServiceClient) { }

  login(username, password) {
    this.username = username;
    this.password = password;

    console.log([username, password]);
    this.service.login(username, password)
      .then((response) => {
        if (response.status === 204) {
          alert("Invalid username/password!")
          return;
        } else {
          return response.json();
        }
      })
      .then((user) => {
        if (user) {
          this.router.navigate(['/profile']);
        }
      })
  }

  ngOnInit() {
  }

}
