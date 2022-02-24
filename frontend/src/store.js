import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userDetailsReducer,
  fetchBrandCatReducer,
  postAddProduReducer,
  fetchAdminProdsReducer,
  fetchEditProdsReducer,
  postEditProdsReducer,
  deleteProdsReducer
} from './reducers/productReducers'

import {
  userLoginReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  userDetail: userDetailsReducer,
  fetchBrandCat : fetchBrandCatReducer,
  postAddProduct : postAddProduReducer,
  fetchAdminProducts : fetchAdminProdsReducer,
  fetchEditProduct : fetchEditProdsReducer,
  postEditproduct : postEditProdsReducer,
  deleteproduct : deleteProdsReducer,
  userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
  }

  const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store