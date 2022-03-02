import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Subscribe from "./Subscribe";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contactus() {
  return (
    <section>
      <Navbar />

      <div
        style={{
          background: "#F1F1F1",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "6rem",
          paddingTop: "8rem",
        }}
      >
        <div class="rect container column">
          <div style={{ padding: "25px" }}>
            <h1>Let's Talk</h1>
            <br></br>

            <p>
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you
              promptly.
            </p>
            <form
              action="mailo:mishrashree18@gmail.com"
              method="post"
              encType="text/plain"
            >
              <p>Your Name</p>
              <input type="text" id="name" name="name" class="input"></input>
              <p>Your Email</p>
              <input type="text" id="email" name="email" class="input"></input>
              <p>Your Message</p>
              <textarea id="message" name="message" class="input"></textarea>
              <br></br>
              <button class="button">Send Message</button>
            </form>
          </div>
          <div class="align-items-center text-center">
            <img src="assets/landing_img/contact.svg" alt="contact" />
            
            <p style={{marginTop:"20px"}}>team@feetwings.com</p>

            <div>
             <FaGithub size={36} className="fs-4" style={{marginRight:"6px"}} />
              
              
              
              <FaInstagram size={36} className="fs-4" style={{marginRight:"6px"}} />
            
              <FaLinkedin size={36} className="fs-4" style={{marginRight:"4px", color:"#0A66C2"}} />
            </div>
                
            
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </section>
  );
}

export default Contactus;
