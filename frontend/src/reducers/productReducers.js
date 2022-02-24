import {
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
    FETCH_BRAND_CAT_SUCCESS,
    FETCH_BRAND_CAT_FAIL,
    POST_ADD_PROD_SUCCESS,
    POST_ADD_PROD_FAIL,
    FETCH_ADMIN_PROD_SUCCESS,
    FETCH_ADMIN_PROD_FAIL,
    FETCH_EDIT_PROD_SUCCESS,
    FETCH_EDIT_PROD_FAIL,
    POST_EDIT_PROD_SUCCESS,
    POST_EDIT_PROD_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL
  } from '../constants/productConstants'
  
  export const userDetailsReducer = (state = { name: null, loading: 2 }, action) => {
    switch (action.type) {
      case USER_DETAILS_SUCCESS:
          console.log(action.payload.name)
        return {
            loading: 1,
          name: action.payload.name,
        }
      case USER_DETAILS_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }


  export const fetchBrandCatReducer = (state = { brandslist: [], categories: [], loading: 2 }, action) => {
    switch (action.type) {
      case FETCH_BRAND_CAT_SUCCESS:
          console.log(action.payload.brandslist)
        return {
            loading: 1,
            brandslist: action.payload.brandslist,
            categories: action.payload.categories
        }
      case FETCH_BRAND_CAT_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }


  export const postAddProduReducer = (state = { loading: 2 }, action) => {
    switch (action.type) {
      case POST_ADD_PROD_SUCCESS:
          console.log(action.payload.msg)
        return {
            loading: 1,
            addpromsgmsg: action.payload.msg
        }
      case POST_ADD_PROD_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }

  export const fetchAdminProdsReducer = (state = { loading: 2 }, action) => {
    switch (action.type) {
      case  FETCH_ADMIN_PROD_SUCCESS:
          console.log(action.payload.prods)
        return {
            loading: 1,
            prods: action.payload.prods,
        }
      case  FETCH_ADMIN_PROD_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }

  export const fetchEditProdsReducer = (state = { loading: 2 }, action) => {
    switch (action.type) {
      case  FETCH_EDIT_PROD_SUCCESS:
          console.log(action.payload.product)
        return {
            loading: 1,
            prods: action.payload.product,
        }
      case  FETCH_EDIT_PROD_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }

  export const postEditProdsReducer = (state = { loading: 2 }, action) => {
    switch (action.type) {
      case  POST_EDIT_PROD_SUCCESS:
          console.log(action.payload.msg)
        return {
            loading: 1,
            editedprodmsg: action.payload.msg,
        }
      case  POST_EDIT_PROD_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }

  export const deleteProdsReducer = (state = { loading: 2 }, action) => {
    switch (action.type) {
      case  PRODUCT_DELETE_SUCCESS:
          console.log(action.payload.msg)
        return {
            loading: 1,
            editedprodmsg: action.payload.msg,
        }
      case  PRODUCT_DELETE_FAIL:
        return { error: action.payload }
      default:
        return state
    }
  }
