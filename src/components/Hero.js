import React from "react";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Hero = () =>
{
  return (
    <section className="h-screen flex content-center justify-center relative bg-no-repeat bg-fixed bg-cover  bg-center" id="home"
      style={{backgroundImage: "url( 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/hero-bg.jpg' )"}}>
      <div className="flex flex-row items-center">
        <div className="social-media-links">
          <div className="text-white space-y-3">
            <h1 className="text-7xl">I'm Guantai Nicholas</h1>
            <p className="text-4xl text-center">Full-stack Software Developer</p>
            <h3 className="text-white text-lg text-center">Let's Connect</h3>
          </div>
          <div className="flex flex-row justify-center text-2xl">
            <a
              href="https://twitter.com/Nicky_guants"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-500"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholasguantai/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/NickyGuants"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-500"
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
