import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AdminProd from './AdminProd';

function Home() {

  const dispatch = useDispatch()
    const navigate  = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo ) {
      navigate('/login')
    } 
      
    }, [dispatch, userInfo, navigate])

    
  return (
  <>
  <AdminProd />
  </>
  )
}

export default Home;
