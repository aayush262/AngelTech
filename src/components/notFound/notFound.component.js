import React from 'react';
import {Link} from 'react-router-dom';


export const NotFoundInfo = () => (
    <div className="ftco-blocks-cover-1">
        <div className="site-section-cover overlay" style={{backgroundImage: 'url("/images/hero_1.jpg")'}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center">
                <h1 className="mb-4 text-white">This page isn't available.</h1>
                <p className="mb-4">The link you followed may be broken, or the page may have been removed.</p>
                <p><Link to="/contact" className="btn btn-primary btn-outline-white py-3 px-5">Contact Us</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

)