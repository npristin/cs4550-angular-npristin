
import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  username;
  password;
  firstName;
  lastName;
  email;
  sections = [];
  address;
  admin;
  userId;
  phone;

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phone = user.phone;
        this.email = user.email;
        this.address = user.address;
        this.userId = user._id;
        this.admin = user.username === 'admin' && user.password === 'admin'
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

  updateUser(user) {
    console.log("updating!")

    user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      address: this.address,
    };
    this.userService.updateUser(user)
      .then(() => alert('Profile updated!!'));
  }

  unenroll(section) {
    this.sectionService
      .unEnrollStudent(section._id)
      .then(sections => {
        this.sections = sections;
      });
  }
}
