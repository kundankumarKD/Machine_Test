import React, { useState } from 'react';
import axios from 'axios'

const UploadFile = () => {
  
    const [file, setFile] = useState('')
    const [imgref, setImgref] = useState('')
    const [loading, setLoading] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
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
            setLoading(1)
        })
    
    }
    catch (error) {
        console.error(error)
      }
}
  return (
  <>
  <form onSubmit={submitHandler} encType="multipart/form-data">
                <div className="form-floating mb-3">
                    <label htmlFor="title">Upload File</label>
                        <input className="" type="file" id="title"  onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Upload</button>
                </form>
               {loading === 1 ? (
                    <img src={imgref} alt='imglogo' />
               ) : (
                    <h6>Source Not Matchd</h6>
               )}
  </>
  )
};

export default UploadFile;
