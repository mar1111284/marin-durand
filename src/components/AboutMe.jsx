import React from 'react';
import ProfilePic from '../assets/profile.jpeg'
const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div className="image-container">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="text-content">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi dignissim, nec placerat libero sagittis. Phasellus tristique justo in magna viverra, nec ultricies sapien commodo. Integer aliquet magna non erat bibendum, eget mollis orci finibus. Sed vitae vehicula ligula.
        </p>
        <p>
          Sed ornare sapien nec nulla consectetur, vitae pulvinar velit consectetur. Vivamus non risus et justo pharetra fermentum. Nam vestibulum nunc sit amet ante rutrum, eget elementum magna fringilla.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
