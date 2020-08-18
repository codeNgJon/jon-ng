import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h1>My Story</h1>
               <h3 style={{fontFamily:'Open Sans', fontSize: '1.25em'}}>
                  I am a proud native of Silicon Valley, where I spent my childhood years. I feel grateful for the journey I have been on living on the beaches of Southern California to the skyscrapers of New York City. My professional experiences have taken me from the Health sciences to Technology, coupled with Human Behavior. From consumer facing products to SaaS applications, I utilize humanistic problem solving and behavioral elements to come up with solutions to free any sticky problems.  
               </h3>
               <h3 style={{fontFamily:'Open Sans', fontSize:'1.25em'}}> You will currently find me thinking about: </h3>
                  <ul>
                     <li>the Future</li>
                     <li>the Art of Wabi Sabi</li>
                     <li>Ikigai</li>
                     <li>Behavior design</li>
                  </ul>
               <h3 style={{fontFamily:'Open Sans', fontSize:'1.25em'}}>
                  Please don't hesitate to reach out! I would love to connect. 
               </h3>
              

               {/* <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <span>{resumeData.website}</span>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
    );
  }
}