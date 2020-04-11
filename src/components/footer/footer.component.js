import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => (
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h2 className="footer-heading mb-3">Our Vision</h2>
                    <p>The foundation of any relationship is Service Commitment – to anticipate and exceed customers expectations.</p>
                </div>
                <div className="col-lg-8 ml-auto">
                    <div className="row">
                        <div className="col-lg-6 ml-auto">
                            <h2 className="footer-heading mb-4">Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/scraping">Web Scraping</Link></li>
                                <li><Link to="/web">Web Development</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="footer-heading mb-4">Contact Us</h2>
                            <div className="social_29128 white mb-5">
                                <Link to="https://www.facebook.com/Linkngel-Tech-107462927254213/"><span className="icon-facebook" /></Link>
                                <Link to="#"><span className="icon-instagram" /></Link>
                                <Link to="#"><span className="icon-twitter" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                    <div className="border-top pt-5">
                        <p>      
                            Copyright © All rights reserved | Angel Tech Labs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)