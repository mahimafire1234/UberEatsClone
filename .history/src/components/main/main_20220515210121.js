import React from "react";
import "../main/main.css";

class Main extends React.Component{
    render(){
        return(
            <div className="main_holder">
                <div className="sub-holder">
                    <h1>Order food to your door</h1>
                    <button className="delivery_toggle_btn">Delivery</button><br></br>
                    <input />

                </div>
            </div>
        )
    }
};

export default Main;