import React from "react";
import "./header.css"

const Header = () => {
        return(
            <div className="headerMain">
                <div className="headerLeft">
                    <a href="#">
                        <h1 className="e-tahlil">
                            <span className="text-span">e</span>
                            -Tahlil
                        </h1>
                        </a>
                </div>
                <div className="headerRight">
                    <i class="fa-solid fa-phone"></i><a href="#" className="hemenAra">Hemen Ara</a>
                </div>
            </div> 
        );
    
    }
export default Header; 
