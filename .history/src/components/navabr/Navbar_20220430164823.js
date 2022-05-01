import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_image from '../navabr/ubereats_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessQueen} from '@fortawesome/free-regular-svg-icons';
import "../"
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
                </nav>
            </div>
        );
    }
};

export default Navbar;