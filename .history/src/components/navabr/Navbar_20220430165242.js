import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo_image from '../navabr/ubereats_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessQueen} from '@fortawesome/free-regular-svg-icons';
import "../navabr/Navbar.css";
import { Button } from "bootstrap";
// header component
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                    {/* hamburger icon */}
                    <FontAwesomeIcon icon={faChessQueen} id="bars_icon" />
                    {/* brand logo */}
                    <a href="/" className="navbar-brand">
                        <img src={logo_image} alt="Uber Eats logo" width={150}></img>
                    </a>

                    {/* login button */}
                    <Button className="btn btn-primary"></Button>
                    {/* sign up button */}
                </nav>
            </div>
        );
    }
};

export default Navbar;