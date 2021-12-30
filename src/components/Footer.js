import React from 'react'
import '../styles/PageLayout.sass'

const Footer = () => {
    return (
        
            <footer className="section footer-classic context-dark bg-image" style={{"background" : "#2d3246"}}>
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><h5>Education Portal</h5>
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                
                <p className="rights"><span>©  </span><span className="copyright-year">2021</span><span> </span><span>Bad Corona Year</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Buca, İzmir, Turkey</dd>
              </dl>
              <dl className="contact-list">
                <dt>E-mail:</dt>
                <dd><a href="mailto:#">email@email.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>Phones:</dt>
                <dd><a href="tel:#">(+90) 123 - 24 - 25</a> <span>or</span> <a href="tel:#">https://www.yasindeger.com</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">About</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </footer>
       
       
    )
}

export default Footer
