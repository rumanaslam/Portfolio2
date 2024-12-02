import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import '../app/styles/about.css';

const About = () => {
  return (
    <div id="about" className="about-div">
      <div className="about-1">
        {/* Heading */}
        <h2 className="about-2" data-aos="zoom-out-down">
          About Me
        </h2>

        {/* Image and Text */}
        <div className="about-3">
          {/* Profile Image */}
          <div className="about-4">
            <Image
              src="/pic.png" // Path to your image
              alt="Profile"
              className="about-5"
              width={300} // Set the desired width
              height={300} // Set the desired height
              priority // Ensures the image is loaded as a priority
            />
          </div>

          {/* About Text */}
          <div className="about-6">
            <p className="about-7">
              &quot;Hello, I&apos;m Ruman, a passionate and hardworking web developer. My journey began in sales and marketing, where I earned my bachelor&apos;s degree. However, my heart was set on web development, and I&apos;ve been working tirelessly to hone my skills.
              <br />
              With expertise in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, I&apos;m dedicated to delivering innovative and effective solutions for my clients. Web development isn&apos;t just a job for me; it&apos;s my passion. 
              My dream is to establish my own software house, where I can provide top-notch solutions for my clients. When I&apos;m not coding, you can find me exploring new places and experiencing different cultures.
              <br />
              I&apos;m excited to collaborate with you and bring your vision to life. Let&apos;s create something amazing together!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
