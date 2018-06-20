export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://cs4550-java-server-npristin.herokuapp.com/api/widget')
      .then(response => response.json());
  }
}
