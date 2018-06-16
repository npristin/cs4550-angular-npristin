import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    this.username = username;
    this.password = password;

    console.log([username, password, password2]);
    if (password !== password2) {
      alert("Passwords must match!");
    } else {
      this.service
        .register(username, password)
        .then((response) => {
          if (response.status === 400) {
            alert("A user with this username already exists!")
            return;
          } else {
            return response.json();
          }
        })
        .then((user) => {
          if (user) {
            this.router.navigate(['/profile', user._id]);
          }
        })
    }
  }

  ngOnInit() {
  }

}
