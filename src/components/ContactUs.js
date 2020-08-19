import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                I love identifying and coming up with solutions for any kind of problem. I want to hear about your story. Please don't hesitate to connect.
              </p>
            </div>
          </div>
          <div className="row">

              {/* <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
                  <li key='email'>
                    <a href={`mailto:1jonathan.ng@gmail.com`}><i className='fa fa-envelope'></i></a>
                  </li>
                </ul> */}
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              </div>
            </aside>
          </div>
        </section>
        );
  }
}