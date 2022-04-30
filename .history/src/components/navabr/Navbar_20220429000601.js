import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// header component
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <nav className="">
                    <a href="/">Uber Eats</a>
                </nav>
            </div>
        );
    }
};

export default Navbar;