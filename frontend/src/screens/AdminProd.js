import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux'
import { fetchAdminProduc, deleteProduc } from '../actions/productActions'


const AdminProd = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const fetchAdminProducts = useSelector((state) => state.fetchAdminProducts)
    const { prods, loading } = fetchAdminProducts

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
      if (userInfo ) {
        dispatch(fetchAdminProduc())
      } else {
        navigate('/login')
      }
        
      }, [dispatch, userInfo, navigate])

      const submitHandler = (e) => {
        e.preventDefault()
        const productId = e.target.elements.productId.value;
        dispatch(deleteProduc(productId))
      }

  return (
   
    <>
    { loading === 1 ? (

  <>
   
   {prods.length > 0 ? (
            <div className="card-deck p-2 width-100px">
                {prods.map((product) => (
                
                <div className="card text-center">
                    <div className="text-center">
                    <img src= {'/' + product.imageUrl} className="card-img-top p-3 h-40" alt={ product.title } style={{ width : '300px', height : '250px'}} />
                </div>
                    <div className="card-body px-0 py-0">
                    <Link to={`/products/${ product.id }`} className="text-decoration-none text-dark h6">{ product.title }</Link>
                    <p className="card-text"> ${ product.selling_price }</p>
                    <p className="card-text">  { product.description }</p>
                    <Link to= {`/admin_products/edit_product/${ product.id }`} className="btn btn-primary d-inline px-1">Edit</Link>
        
                    <form onSubmit={submitHandler} className='d-inline px-1'>
                        <input type="hidden" value={ product.id } name="productId" />
                       
                        <button className="btn btn-primary d-inline px-1" type="submit">Delete</button>
                    </form>
                  </div>
                </div>
              ))}
              </div>
             ) : (
                <h1>No Products Found!</h1>
             )}
  </>

) : (
  <div className='container text-center'>
    <h6>Fetching Admin Products</h6>
    </div>
)}
</>

  )
};

export default AdminProd;
