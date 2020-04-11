import React from 'react';
import { Link } from 'react-router-dom';


export const Header = (props) => {
    const openSideBar=()=>{
        props.onOpenSidebar();
    }
    return (
        <>
            <header className="site-navbar site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-3 ">
                            <div className="site-logo">
                                <Link to="/" className="font-weight-bold">Angel Tech Labs</Link>
                            </div>
                        </div>
                        <div className="col-9  text-right">
                            <span onClick={openSideBar} className="d-inline-block d-lg-block"><Link to="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white" /></Link></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}