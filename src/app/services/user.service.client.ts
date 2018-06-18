export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    console.log("updating in user service!!")
    return fetch('http://localhost:4000/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login',
      {
        body: JSON.stringify(credentials),
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      });
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };

    return fetch('http://localhost:4000/api/register',
      {
        body: JSON.stringify(user),
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      });
  }

  logout() {
    return fetch('http://localhost:4000/api/logout',
      {
        method: 'post',
        credentials: 'include'
      })
  }

  delete() {
    return fetch('http://localhost:4000/api/profile', {
      credentials: 'include',
      method: 'delete'
    });
  }

  loggedIn() {
    return fetch('http://localhost:4000/api/login/loggedin', {
      credentials: 'include'
    });
  }
}
