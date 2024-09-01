import React from 'react'
import { useLocation } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    const location = useLocation();
    const ispage = location.pathname === '/login' || location.pathname === '/signup';
    const isAdmin = location.pathname === '/admin' || location.pathname === '/admin/add' || location.pathname === '/admin/edit' || location.pathname === '/admin/users' || location.pathname === '/admin/feedback'

    if(isAdmin){
        return null
    }
    return (
        <>
            {ispage ? (
                null
            ) : (
                <div className="footer-main">
                    <footer>
                        <div className="col mb-3">
                            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"><img src="/logo.png" alt="" />
                            </a >

                            <p className="text-light">Delicious nutrition, delivered.</p>
                            <p className="text-light">© 2024 Active Bistro Ltd.</p>
                        </div >

                        <div className="col mb-3 quiklink">
                            <h5>QUICK LINKS</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
                                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-light">About Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Our Menu</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">How It Works</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3 usefullink">
                            <h5>USEFUL LINKS</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQ</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Privacy Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Terms & Condition</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3 connect">
                            <h5>CONNECT</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-brands fa-youtube"></i> Youtube</a></li>
                            </ul>
                        </div>
                    </footer >
                    <div className="ft-2 p-5">
                        <h5>STAY CONNECTED</h5>
                        <a><i className="fa-regular fa-envelope"></i> Email</a>
                        <p>support@activebistro.co.uk</p>
                        <a><i className="fa-solid fa-phone"></i> Phone</a>
                        <p>01382 722 026</p>
                        <a><i className="fa-solid fa-location-dot"></i> Location</a>
                        <p>Unit 14 Marybank Lane, Dundee. DD2 3DY</p>
                    </div>
                </div >
            )}



        </>
    )
}

export default Footer