import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
export const Login = () => {
    const oldInput = {email: '', password:''}
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
    const navigate  = useNavigate()
  
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, userInfo } = userLogin

    useEffect(() => {
      if (userInfo ) {
        navigate('/')
      } 
        
      }, [dispatch, userInfo, navigate])

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }
  return (
    <>
    { loading !== 1 ? (
  <>
  
  <div className="container py-3">
        <div className="row">
            <div className="col-md">
                
                    <h4>New Customer</h4>
                    <h6 className="py-3">Register Account</h6>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <Link to="/signup" className="btn btn-dark mt-5">CONTINUE</Link>
                
        
            </div>
            <div className="col-md">
        
                    <h4>Returning Customer</h4>
                    <h6 className="py-3">I am a returning customer</h6>
                   
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" placeholder={ oldInput.email } value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder={ oldInput.password } className="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" className="btn btn-dark">LOGIN</button>
                      </form>
                
                
            </div>
        </div>
    </div>
  </>

) : (
    <h6>hello bro</h6>
)}
</>
  )
};
