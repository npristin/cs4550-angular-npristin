export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/student/' + sectionId + '/section';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId, courseId) {
    return fetch('http://localhost:4000/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(() => this.findSectionsForCourse(courseId));
  }

  unEnrollStudent(sectionId) {
    const url = 'http://localhost:4000/api/student/' + sectionId + '/section';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    }).then(() =>
      this.findSectionsForStudent());
  }

  updateSection(sectionId, section) {
    return fetch('http://localhost:4000/api/section/' + sectionId, {
      body: JSON.stringify(section),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
