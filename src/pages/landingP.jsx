import React from "react";
import "../styles/landingP.css";

function landingP(){
    return(
        <div id="home" class="app-banner-area pt-100">
            <div class="container">
                <div class="row align-items-center sock-reverse">
                    <div class="col-lg-6">
                        <div class="app-bennr-text">
                            <h1 className="hover-effect">Smart Textile Based Healthcare Assistant</h1>
                            <p>FeetWings is a smart wearable company that aims to provide a solution to diabetes and related complications at an affordable rate.</p>

                            <div class="app-shapes d-flex  " style={{gap:20,marginBottom:"20px"}}>
                                <div>
                                <img src="../assets/landing_img/apple.svg" class="app-img" alt="Landing" />
                                </div>
                                <div>
                                     <img src="../assets/landing_img/playstore.svg" class="app-img" alt="Landing" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="app-banner-img">
                            <img src="../assets/landing_img/sock.png" class="app-img" alt="FeetWings"/>
                            <div class="app-shapes"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-shape">
                </div>
            </div>
        </div>

    )
}

export default landingP;
