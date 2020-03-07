import React, { Component } from 'react'

 const Navbar =(props) => (
    <div className="">
            <nav className="navbar">
                <h2 > <a href="#" className="logo"> {props.title} </a></h2>
                <ul className="nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Best Lecturer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Best Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Best Films</a>
                    </li>
                    
                </ul>
            </nav>
    </div>


 );

export default Navbar
