import React from 'react';

export const AboutUs = () => (
    <div className="site-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <h2 className="h4 mb-4">About Us</h2>
                    <p>Are you looking to gather data for your business or an attractive website? Well, Then you are at the right place as we deliver the best data solutions and web solutions for your company. We specialize on web scraping various websites like yelp, yellow pages and custom website according to the needs. We tackle many hard problems on our day to day scraping and ensure you to provide utmost value for the service we provide.</p>
                    <p>Learn more about the service and offer we provide in detail.</p>
                </div>
                <div className="col-md-4">
                    <img src="images/about_1.jpg" alt="about" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h2 className="h4 mb-4">Our expertise and skills</h2>
                    <div className="progress-wrap mb-4">
                        <div className="d-flex">
                            <span>Web Scraping</span>
                            <span className="ml-auto">100%</span>
                        </div>
                        <div className="progress rounded-0" style={{ height: '7px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress-wrap mb-4">
                        <div className="d-flex">
                            <span>Web Development</span>
                            <span className="ml-auto">100%</span>
                        </div>
                        <div className="progress rounded-0" style={{ height: '7px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress-wrap mb-4">
                        <div className="d-flex">
                            <span>Graphics Design</span>
                            <span className="ml-auto">100%</span>
                        </div>
                        <div className="progress rounded-0" style={{ height: '7px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="progress-wrap mb-4">
                        <div className="d-flex">
                            <span>Python</span>
                            <span className="ml-auto">100%</span>
                        </div>
                        <div className="progress rounded-0" style={{ height: '7px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)