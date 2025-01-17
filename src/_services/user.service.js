import axios from 'axios';
// import authHeader from '../_helpers/auth-header';

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const login = (email, password) => {
  return axios
    .post('/auth/login', {
      email,
      password
    })
    .then(response => response.data) // TODO use utils.handleResponse
    .then(data => {
      console.log(data);
      // Store user details and JWT token in localStorage to keep user logged in between page refreshes.
      localStorage.setItem(
        'user',
        JSON.stringify({
          uid: data.uid,
          isAdmin: data.isAdmin,
          token: data.token
        })
      );
      return data;
    })
    .catch(err => {
      console.log(err);
      logout();
      const { history } = this.props;
      history.location.reload(true);
    });
};

const userService = {
  login,
  logout
};

export default userService;
