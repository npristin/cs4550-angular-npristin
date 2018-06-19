import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin-section-list',
  templateUrl: './admin-section-list.component.html',
  styleUrls: ['./admin-section-list.component.css']
})
export class AdminSectionListComponent implements OnInit {


  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  loaded = false;

  loadSections(courseId) {
    if (courseId !== undefined) {
      this.loaded = true;
    }
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

  deleteSection(sectionId) {
    this.service.deleteSection(sectionId, this.courseId)
      .then(response => this.sections = response);
  }

  editSection(sectionId, sectionName) {
    this.service.updateSection(sectionId, sectionName)
      .then(() => alert("Section has been updated!"))
  }

  ngOnInit() {
  }

}
