import React from "react";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="hero">
      <div className="branding">
        <div className="profile">
          <div className="profile-pic">
            <img
              id="profile"
              src="https://avatars.githubusercontent.com/u/51677808?v=4"
              alt="Profile"
            />
          </div>

          <div className="profile-text">
            <h1>Hi, I'm Guantai Nicholas</h1>
            <h2>I am a full-stack developer from Kenya</h2>
            <p>
              I am passionate about solving problems using various technologies.
            </p>
          </div>
        </div>

        <div className="social-media-links">
          <h3>Let's Connect</h3>
          <div className="links">
            <a
              href="https://twitter.com/Nicky_guants"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholasguantai/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/NickyGuants"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
