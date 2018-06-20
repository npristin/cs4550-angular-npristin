export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('https://cs4550-java-server-npristin.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
