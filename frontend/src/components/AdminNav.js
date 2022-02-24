import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userDetails } from '../actions/productActions'
import { logout } from '../actions/userAction'

const AdminNav = () => {

    const dispatch = useDispatch()

    const userDetail = useSelector((state) => state.userDetail)
    const { name, loading } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
      dispatch(userDetails())
 
    }, [dispatch, userInfo, name])
    
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
      }
  return (

    <>
      { loading === 1 ? (
  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light border border-dark-bottom mb-0">
    <ul className="navbar-nav mr-auto w-100 p-3 container-fluid">

       { userInfo ? (
           <>
                <li className="nav-item">
                <Link to='/admin_products' className="text-decoration-none text-dark h6">Admin Products</Link> 	
                    
                </li>

                <li className="nav-item">
                <Link to="/add_product" className="text-decoration-none text-dark h6">Add Product</Link>
                </li>
            </>
       ) : (
           <></>
       )}

     {!userInfo ? (
            <li className="nav-item">
               <Link to="/login" className="text-decoration-none text-dark h6">Login</Link> 
             </li>
      

     ) : (
       <>
      <li className="nav-item">
        <button className='btn btn-primary'>{name}</button>
        </li>

                <li className="nav-item">
                    <form onSubmit={logoutHandler}>                  
                        <button type="submit" className="bg-transparent">Logout</button>
                    </form>
                 </li>
                 </>

     )}
    </ul>
</nav>
  </>

) : (
  <div className='container text-center'>
    <h6>Loading...</h6>
    </div>
)}
</>

  )
};

export default AdminNav;
