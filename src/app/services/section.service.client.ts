export class SectionServiceClient {

  SECTION_URL = 'https://cs4550-s1-node-npristin.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'https://cs4550-s1-node-npristin.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://cs4550-s1-node-npristin.herokuapp.com/api/student/' + sectionId + '/section';
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
    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(() => this.findSectionsForCourse(courseId));
  }

  unEnrollStudent(sectionId) {
    const url = 'https://cs4550-s1-node-npristin.herokuapp.com/api/student/' + sectionId + '/section';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    }).then(() =>
      this.findSectionsForStudent());
  }

  updateSection(sectionId, sectionName) {
    const section = {
      name: sectionName
    }

    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/section/' + sectionId, {
      body: JSON.stringify(section),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
