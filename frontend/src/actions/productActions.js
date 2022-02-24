import axios from 'axios'
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


export const userDetails = () => async (
  dispatch
) => {
  try {
    const { data } = await axios.get('/user_details')
    
    dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })

    
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const fetchBrandAndCat = () => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(`/admin/BrandAndCat`)
    
    dispatch({
        type: FETCH_BRAND_CAT_SUCCESS,
        payload: data,
      })

    
  } catch (error) {
    dispatch({
      type: FETCH_BRAND_CAT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}



export const postaddproduc = (title, brand_id, category_id, imgref, color, selling_price, discount_price, product_qty, product_code, description) => async (dispatch) => {
  try {

    console.log(title + brand_id + category_id + "Here IS Your File" + imgref + color + selling_price + discount_price + product_qty + product_code + description)

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/admin/add-product',
      { title, brand_id, category_id, imgref, color, selling_price, discount_price, product_qty, product_code, description },
      config
    )

    dispatch({
      type: POST_ADD_PROD_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: POST_ADD_PROD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fetchAdminProduc = () => async (
  dispatch
) => {
  try {
    const { data } = await axios.get('/admin/products')
    
    dispatch({
        type: FETCH_ADMIN_PROD_SUCCESS,
        payload: data,
      })

    
  } catch (error) {
    dispatch({
      type: FETCH_ADMIN_PROD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fetchEditProduc = (productId) => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(`/admin/edit-product/${productId}`)
    
    dispatch({
        type: FETCH_EDIT_PROD_SUCCESS,
        payload: data,
      })

    
  } catch (error) {
    dispatch({
      type: FETCH_EDIT_PROD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const postEditProduc = (productId, title, brand_id, category_id, imgref, color, selling_price, discount_price, product_qty, product_code, description) => async (
  dispatch
) => {
  try {
    console.log(productId + brand_id + category_id + imgref + title)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/admin/edit-Product',
      { productId, title, brand_id, category_id, imgref, color, selling_price, discount_price, product_qty, product_code, description },
      config
    )

    dispatch({
      type: POST_EDIT_PROD_SUCCESS,
      payload: data,
    })

    
  } catch (error) {
    dispatch({
      type: POST_EDIT_PROD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const deleteProduc = (productId) => async (
  dispatch
) => {
  try {
    console.log(productId)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/admin/delete-product',
      { productId},
      config
    )

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    })

    
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
