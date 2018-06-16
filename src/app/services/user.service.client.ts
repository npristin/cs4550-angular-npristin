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

  updateUser(userId, user) {
    return fetch('http://localhost:4000/api/user/' + userId, {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByCredentials(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login',
      {
        body: JSON.stringify(user),
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
}
