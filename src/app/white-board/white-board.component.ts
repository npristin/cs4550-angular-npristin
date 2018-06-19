import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {SectionServiceClient} from "../services/section.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  loggedIn;
  sections = [];

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.userService.loggedIn()
      .then(response => {
        this.loggedIn = response.status !== 404;
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
}
