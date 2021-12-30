import React from "react"           
import { Link } from 'react-router'

class Header extends React.Component {

    constructor(){
      super();

      this.state = {
          isNavOpen : false
      }
    }


    change() {

      this.setState({isNavOpen : !this.state.isNavOpen})
    
    }
   


  render(){
    
    return (
      <header>
        <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="/">Education Portal</a>
          <button className="navbar-toggler"  type="button" onClick={this.change.bind(this)} >
        <span className="navbar-toggler-icon" ></span>
      
        </button>
        <div className="navbar-collapse" style={{'display':this.state.isNavOpen ? "block" : "none"}}>
          <ul className="navbar-nav ">
  
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">Home</Link>
            </li>
  
            <li  className="nav-item">
              <Link to="/education" activeClassName="active" className="nav-link">Education</Link>
            </li>
  
            <li className="nav-item">
              <Link to="/about" activeClassName="active" className="nav-link">About</Link>
            </li>
  
          </ul>
          </div>
        </nav>
       
      </header>

      
    );
  }

}


export default Header;
