import React from "react";
import 'bootstrap'
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <nav>
                    <a href="/">Uber Eats</a>
                </nav>
            </div>
        );
    }
};

export default Navbar;