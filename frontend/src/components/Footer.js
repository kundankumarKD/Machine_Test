import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
  
  <>
  <div className="container-fluid bg-dark">
    <div className="container">
        <div className="row py-md-5">
            <div className="col-md">

               <p className="text-light">We Assure Secured Delivery Within Specific Time in India and Worldwide
                   And Provide Cash On Delivery in Kolkata And Free Shipping Within India</p>
            </div>
            <div className="col-md">

               <p className="text-light">
                   Mail us for any Suggestions Which will help us to serve you better wecare@sahatextile.com
               </p>
            </div>
            <div className="col-md">

               <p className="text-light">
                   Our Customers are our Asset and we are Happy to serve You..!!
               </p>
            </div>
            <div className="col-md">

               <p className="text-light">
                   We Offer Worldwide Shipping Through Fedex And DHL
               </p>
            </div>
        </div>
        <div className="row mt-md-5">
            <div className="col-md-4">
               <ul className="list-unstyled">
                   <li> <Link to="#" className="text-decoration-none text-light small">About Us</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">Privacy Policy</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">Terms & Conditions</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">Return and Refund Policy</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">Events</Link></li>
               </ul> 
            </div>

            <div className="col-md-4 offset-md-4">
               <ul className="list-unstyled">
                   <li> <Link to="#" className="text-decoration-none text-light small">Contact Us</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">Returns</Link></li>
                   <li> <Link to="#" className="text-decoration-none text-light small">site Map</Link></li>
               </ul> 
            </div>
        </div>

        <div className="row pt-md-3">

           <div className="col">
               <Link to="#" className="float-right h6">FB</Link>
           </div>
        </div>
    </div>

    <div className="container bg-light">

       <div className="row mt-md-3">
           <div className="col-md">

               <h6>CERTIFIED BY</h6>
           </div>

           <div className="col-md">

               <h6>TOUCH WITH US</h6>
           </div>

           <div className="col-md">
               <h6>SHIPPING PARTNERS</h6>

           </div>

       </div>

    </div>
   

</div>
<div className="container-fluid bg-light">
   <p>Copyright © 2017, Saha Textile, All Rights Reserved.</p>

</div>
  </>
  )
}

export default Footer;
