import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AdminNav from './components/AdminNav'
import Home from './screens/Home'
import { Login } from './screens/Login'
import AddProd from './screens/AddProd'
import AdminProd from './screens/AdminProd'
import EditProduct from './screens/EditProduct'
import UploadFile from './screens/UploadFile'
function App() {
  return (
    <Router>
      <AdminNav />
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/login' element={<Login />} />
      <Route path='/upload' element={<UploadFile />} />
      <Route path='/add_product' element={<AddProd />} />
      <Route path='/admin_products' element={<AdminProd />} />
      <Route path='/admin_products/edit_product/:productId' element={<EditProduct />} />
      </Routes>
      <Footer />
    </Router>
     
  );
}

export default App;
