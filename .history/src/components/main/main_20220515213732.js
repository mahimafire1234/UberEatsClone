import React from "react";
import "../main/main.css";

class Main extends React.Component{
    render(){
        return(
            <div className="main_holder">
                <div className="sub-holder">
                    <h1>Order food to your door</h1>
                    {/* toggle switch */}
                    <label className="switch">
                        <input type={"checkbox"} id="toggle_btn"/>
                        <span className="slider round">
                            <span className="delivery">Delivery</span>
                            <span className="pick_up">Pick Up</span>
                    </label>
                    <input />

                </div>
            </div>
        )
    }
};

export default Main;