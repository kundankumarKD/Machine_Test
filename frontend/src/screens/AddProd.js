import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrandAndCat, postaddproduc } from '../actions/productActions'


const AddProd = () => {

    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const oldInput = {title : '', brand_id : '', category_id : '', file : '', color : '', selling_price : '', discount_price : '', product_qty : '', product_code : '', description : ''}
    const [title, setTitle] = useState('')
    const [brand_id, setBrand_id] = useState('')
    const [category_id, setCategory_id] = useState('')
    const [color, setColor] = useState('')
    const [selling_price, setSelling_price] = useState('')
    const [discount_price, setDiscount_price] = useState('')
    const [product_qty, setProduct_qty] = useState('')
    const [product_code, setProduct_code] = useState('')
    const [description, setDescription] = useState('')

    const [file, setFile] = useState('')
    const [imgref, setImgref] = useState('')
    // const [imguploading, setUpLoading] = useState('')

    const fetchBrandCat = useSelector((state) => state.fetchBrandCat)
    const { loading, brandslist, categories } = fetchBrandCat

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
      if (userInfo ) {
        dispatch(fetchBrandAndCat())
      } else {
        navigate('/login')
      }
        
      }, [dispatch, userInfo, navigate])
    

  const uploadHandler = (e) => {
    const filedata = file
    const formData = new FormData()
    formData.append('image', filedata)

console.log(formData)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      axios.post('/admin/upload', formData, config).then(data => {console.log(data.data.imageUrl)
        setImgref(data.data.imageUrl)
        // setUpLoading(1)
    })

}
catch (error) {
    console.error(error)
  }
}

    const submitHandler = (e) => {
        e.preventDefault()
       
        dispatch(postaddproduc(title, brand_id, category_id, imgref, color, selling_price, discount_price, product_qty, product_code, description))
      }
  return (

    <>
      { loading === 1 ? (
  <>
   
  <div className='container'>
  </div>
      <div className="lin">
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Add Product</h5>
              <form onSubmit={submitHandler} encType="multipart/form-data">
                <div className="form-floating mb-3">
                    <label htmlFor="title">Title</label>
                        <input className="" type="text" name="title"  id="title"  placeholder={ oldInput.title } value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-floating mb-3">
                  <label htmlFor="title">Select Brand</label>
                  <select name="brand_id" id="brands" onChange={(e) => setBrand_id(e.target.value)}>
                    <option value="" selected="" disabled="">Select Brand</option>
                    {brandslist.map((brand) => (
                    <option value={brand.id}> { brand.brand_name }</option>
                    ))}
                  </select>
                  <br /><br />
              </div>


              <div className="form-floating mb-3">
                <label htmlFor="title">Select Category</label>
                <select name="category_id" id="categor" onChange={(e) => setCategory_id(e.target.value)}>
                  <option value="" selected="" disabled="">Select Category</option>
                  
                   {categories.map((category) => (
                  <option value={ category.id }> { category.category_name }</option>
                   ))}
                </select>
                <br /> <br />
            </div>


                <div className="form-floating mb-3">
                    <label htmlFor="image">Image</label>
                <input 
                    type="file" 
                    name="image" 
                    id="image" 
                    onChange={(e) => setFile(e.target.files[0])}
                     />
                     <p className='btn btn-primary' onClick={uploadHandler}>upload</p>
                </div>

                <div className="form-floating mb-3">
                  <label htmlFor="title">Color</label>
              <input 
                  className=""
                  type="text" 
                  name="color" 
                  id="color" 
                  placeholder={ oldInput.color } value={color} onChange={(e) => setColor(e.target.value)} />
              </div>

                <div className="form-floating mb-3">
                    <label htmlFor="selling_price">Selling Price</label>
                    <input 
                        className=""
                        type="number" 
                        name="selling_price" 
                        id="selling price" 
                        step="0.01" 
                        placeholder={ oldInput.selling_price } value={selling_price} onChange={(e) => setSelling_price(e.target.value)} />
                </div>

                <div className="form-floating mb-3">
                  <label htmlFor="discount_price">Discount Price</label>
                  <input 
                      className=""
                      type="number" 
                      name="discount_price" 
                      id="discount price" 
                      step="0.01" 
                      placeholder={ oldInput.discount_price } value={discount_price} onChange={(e) => setDiscount_price(e.target.value)} />
              </div>

              <div className="form-floating mb-3">
                <label htmlFor="product_qty">Product Qty</label>
                <input 
                    className=""
                    type="number" 
                    name="product_qty" 
                    id="product_qty" 
                    step="0.01" 
                    placeholder={ oldInput.product_qty } value={product_qty} onChange={(e) => setProduct_qty(e.target.value)} />
            </div>

            <div className="form-floating mb-3">
              <label htmlFor="product_code">Product Code</label>
              <input 
                  className=""
                  type="number" 
                  name="product_code" 
                  id="product code" 
                  step="0.01" 
                  placeholder={ oldInput.product_code } value={product_code} onChange={(e) => setProduct_code(e.target.value)} />
          </div>
               

                <div className="form-floating mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className=""
                        name="description" 
                        id="description" 
                        rows="5" placeholder={ oldInput.description } value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>       
                <div className="d-grid">
                 
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </>

) : (
  <div className='container text-center'>
    <h6>Loading...</h6>
    </div>
)}
</>

  )
};

export default AddProd;
