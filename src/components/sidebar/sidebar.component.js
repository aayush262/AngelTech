import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.component.css'



export class Sidebar extends React.Component {
   
    sideClose=()=>{
        this.props.onCloseSidebar();
    }
    render() {
        return (
            <div className={`site-mobile-menu site-navbar-target ${this.props.isOpen? 'open' : null}`}>
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span onClick={this.sideClose} className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                    <ul className="site-nav-wrap">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/scraping">Web Scraping</Link></li>
                        <li><Link to="/web">Web development</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}