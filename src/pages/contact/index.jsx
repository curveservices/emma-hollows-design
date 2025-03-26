import React, { useRef } from 'react';
import emma from '../../assets/images/emma2.webp';
import './index.scss';
import Socials from '../../components/socials';

const Contact = () => {
    const refForm = useRef();
    const handleSubmit = async (e) => { 
       
    }
  return (
    <div className='contact-page'>
        <div className="hero-left">
            <h1>Contact Me</h1>
            <div className="subtitle">designer | supervisor | maker</div>
              <img
                  className='portrait-image'
                  src={emma}
                  alt="Emma Hollows Design, Costume designer, West-end London" />
            <p>If you would like to contact me about work fill out my contact form or drop me an email emma@emmahollows.co.uk</p>
        </div>
        <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" id='name'>
                      Your Name
                  </label>
                  <input
                      type="text"
                      name='name'
                      id='name'
                      placeholder='full name'
                      required
                  />
                </div>
                <div className="form-group">
                    <label htmlFor="email" id='email'>
                        Your Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='email@example.com'
                        required
                  />
                </div>
                <div className="form-group">
                      <label htmlFor="subject" id="subject">
                          Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" id='message'>
                        Your Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        rows={8}
                        required
                      ></textarea>
                      <div className="btn-container">
                          <input type="submit" value="submit" className='submit-button' />
                      </div>
                </div>
              </form>
              <Socials />
        </div>
    </div>
  )
}

export default Contact
