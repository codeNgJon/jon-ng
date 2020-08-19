import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
        {/* <div>
          <h3>Jonathan Ng</h3> */}
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#hide" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
              <li><a className="smoothscroll" href="#services">Services</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* </div> */}

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Who am I?</h1>
               <h3 style={{color:'#fff', fontFamily:'Open Sans', fontSize: '1.5em', lineHeight: '1.5em'}}>A UX and UI maker. Behavior Design Consultant. Lifestyle Designer. Mindfulness Coach...on a mission to help people get unstuck. 
               </h3>
               {/* <hr/> */}
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
                  <li key='email'>
                    <a href={`mailto:1jonathan.ng@gmail.com`}><i className='fa fa-envelope'></i></a>
                  </li>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}