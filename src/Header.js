import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     Sports World
     
     <div className="img">
     <img src={process.env.PUBLIC_URL + '/sports.jpg' } alt="Sports"  />
     
     </div>
     </header>
    );
  }
}

export default Header;