import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// header component
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                    <a href="/" className="navbar-brand">
                        <img ></img>
                    </a>
                </nav>
            </div>
        );
    }
};

export default Navbar;