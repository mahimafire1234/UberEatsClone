import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import logo_image from '../navabr/ubereats_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessQueen} from '@fortawesome/free-regular-svg-icons';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../navabr/Navbar.css";
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

                    {/* div to place buttons */}
                    <div id="button_containing_div">
                        {/* login button */}
                        <Button className="btn " id="loginbtn">
                            <FontAwesomeIcon icon={faUser} className="m/>
                            Log In
                        </Button>
                        
                         {/* sign up button */}
                        <Button className="btn btn-primary" id="signup_btn">Sign up</Button>
                    </div>
                
                </nav>
            </div>
        );
    }
};

export default Navbar;