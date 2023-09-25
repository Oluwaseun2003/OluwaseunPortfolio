import React from "react";
import { ReactDOM } from "react";
import './footer.css'          


function Footer(){
    return(
        <>

            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2023 by Oluwaseun | All rights reserved</p>
                </div>

                <div className="footer-iconTop">
                    <a href="#"><i class='bx bx-up-arrow-alt' ></i></a>
                </div>
            </footer>
            
        </>
    )
}

export default Footer