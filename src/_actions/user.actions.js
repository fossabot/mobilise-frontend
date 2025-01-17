import userConstants from '../_constants/user.constants';
import userService from '../_services/user.service';

import history from '../_helpers/history';
import alertActions from './alert.actions';

const login = (username, password) => {
  const request = user => {
    return { type: userConstants.LOGIN_REQUEST, user };
  };
  const success = user => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error('Login failed!'));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const userActions = {
  login,
  logout
};

export default userActions;
