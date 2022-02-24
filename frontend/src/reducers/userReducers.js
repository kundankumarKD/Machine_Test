import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        console.log(action.payload.user)
        return { loading: 1, userInfo: action.payload.user }
      case USER_LOGIN_FAIL:
        return { loading: 2, error: action.payload }
        case USER_LOGOUT_SUCCESS:
          console.log(action.payload.msg)
        return {logoutmsg : action.payload.msg}
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
