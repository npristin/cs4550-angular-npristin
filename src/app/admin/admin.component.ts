import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient) {
  }

  courses: Course[] = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
