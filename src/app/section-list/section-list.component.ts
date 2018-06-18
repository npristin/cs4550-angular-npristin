import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  admin;
  loggedIn;

  ngOnInit() {
    this.userService.loggedIn()
      .then(response => {
        this.loggedIn = response.status !== 404;
      })
      .then(() => {
        if (this.loggedIn) {
          this.userService.profile()
            .then(user => {
              this.admin = user.username === 'admin';
            });
        }
      });
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    if (this.loggedIn) {
      this.service
        .enrollStudentInSection(section._id)
        .then((response) => {
          if (response.status === 403) {
            alert('This section is full.');
          }
          if (response.status === 404) {
            alert('Cannot enroll in same section twice');
          }
          if (response.status === 200) {
            this.router.navigate(['profile']);
          }
        });
    } else {
      alert('Please log in to enroll!');
    }
  }
}
