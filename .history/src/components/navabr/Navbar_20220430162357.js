import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_image from '../navabr/ubereats_logo.png';
// header component
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                    
                    <button>

                    </button>
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