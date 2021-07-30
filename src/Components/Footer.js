import React from 'react';
import {
    Link
  } from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="footer">
    <div className="footer-container">
        <div className="row">
            <div className="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Our Services</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Affiliate Program</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Get Help</h4>
                <ul>
                    <li><Link to="#">FAQ</Link></li>
                    <li><Link to="#">Shipping</Link></li>
                    <li><Link to="#">Returns</Link></li>
                    <li><Link to="#">Order Status</Link></li>
                    <li><Link to="#">Payment Status</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Shop </h4>
                <ul>
                    <li><Link to="#">Laptop</Link></li>
                    <li><Link to="#">Mobile</Link></li>
                    <li><Link to="#">Headset</Link></li>
                    <li><Link to="#">Speakers</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Us</h4>
                <ul className="social-links">
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                    <Link to="#"><i className="fa fa-github"></i></Link>
                    <Link to="#"><i className="fa fa-whatsapp"></i></Link>
                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                </ul>
            </div>
        </div>
    </div>
</footer>

    );
}
