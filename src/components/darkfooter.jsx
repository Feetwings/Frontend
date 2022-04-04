import React from 'react'

const Darkfooter = () => {
  return (
      <>
    <div className='dark-footer'>
        <a class="footer-brand" href="/">
                    <img src="../assets/logo/logo_web.png" alt="FeetWings" />
                </a>
                <div className="social">
        <a href="" className="social-links" style={{margin:'10px'}}>Linkedin</a>        
        <a href="" className="social-links">GitHub</a>      
        <a href="" className="social-links">Instagram</a>  

          
    </div>
    </div> 
    
    <div class="footer-links" style={{fontSize:"20px", cursor:"pointer", textDecoration: "none", color:'white'}}><a href="/toc">Terms & Conditions</a><a href="/privacy">Privacy Policy</a><a href="/faq" >FAQs</a><a href="/career">Career</a></div>
    <div class="footer-text" style={{color:'white', textAlign:'center'}}>Copyright @2021 FeetWings. All Rights Reserved</div>
    </>
  )
}

export default Darkfooter