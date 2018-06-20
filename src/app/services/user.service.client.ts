export class UserServiceClient {

  USER_API_URL = 'https://cs4550-s1-node-npristin.herokuapp.com/api/user';
  PROFILE_API_URL = 'https://cs4550-s1-node-npristin.herokuapp.com/api/profile';

  findUserById(userId) {
    return fetch(this.USER_API_URL + '/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch(this.PROFILE_API_URL,
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
    return fetch(this.USER_API_URL, {
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
    return fetch(this.PROFILE_API_URL, {
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
    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/login',
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

    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/register',
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
    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/logout',
      {
        method: 'post',
        credentials: 'include'
      })
  }

  delete() {
    return fetch(this.PROFILE_API_URL, {
      credentials: 'include',
      method: 'delete'
    });
  }

  loggedIn() {
    return fetch('https://cs4550-s1-node-npristin.herokuapp.com/api/login/loggedin', {
      credentials: 'include'
    });
  }
}
