import React from 'react';
import { IoMailOpenSharp } from 'react-icons/io5';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import '../app/styles/contact.css'; // Correct CSS file path

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-1">
        <div className="contact-2">
          {/* Left Side - Contact Info */}
          <div className="contact-3">
            <h2 className="contact-4" data-aos="zoom-out-down">
              Get in Touch With Me
            </h2>
            <p className="contact-5" data-aos="zoom-out-down">
  I would love to hear from you! Whether it&apos;s a project inquiry, 
  collaboration, or just to say hello, feel free to get in touch.
</p>
            <div className="contact-6" data-aos="zoom-out-down">
              <IoMailOpenSharp size={30} className="text-[#F7DF1E]" />
              <span>rumi91909@gmail.com</span>
            </div>
            <div className="contact-7" data-aos="zoom-out-down">
              <BsTelephoneOutboundFill size={30} className="text-[#61DAFB]" />
              <span>+92-346-5890978</span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-8" data-aos="fade-up">
            <div className="contact-9">
              {/* Name Field */}
              <div className="contact-10">
                <label htmlFor="name" className="contact-11">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact-12"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="contact-13">
                <label htmlFor="email" className="contact-14">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact-15"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="contact-13">
                <label htmlFor="msg" className="contact-16">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  className="contact-17"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="contact-18" data-aos="zoom-out-down">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
