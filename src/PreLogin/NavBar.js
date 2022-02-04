import React from 'react';
import { Link } from "react-router-dom";

const MyNavBar = () => {
    return (
        <>
        <div>
            <ul>
            <li className="nav-item">
                <Link className="nav-link text-dark" to="/home">
                    <span className="fas fa-sign-in-alt "></span> Home
                </Link>
			</li> 
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            </ul>
        </div>
        </>
    )
};

export default MyNavBar;
