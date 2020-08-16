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
                  I was lucky enough to have grown up in the Silicon Valley, spending most of my childhood years here. Since that time, I have gotten to known
                  the beaches of Southern California and the skyscrapers of New York City. Over the last ten years, my experiences have taken me from the Health sciences to Technology, where I apply Human Computer Interactions. 
               </h3>
               <p>
                  You will now find me thinking about:
                  <ul>
                     <li>the Future</li>
                     <li>the Art of Wabi Sabi</li>
                     <li>Ikigai</li>
                     <li>Behavior design</li>
                  </ul>
               </p>

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