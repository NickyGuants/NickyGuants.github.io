import React from "react";

const About = () => {
  return (
    <section className="about">
      <h1>Skills</h1>
      <div className="skills">
        <div className="card">
          <h2>Front-End Development</h2>
          {/* <img src="../../public/images/frontend.png" alt="frontend-img" /> */}
          <p>User experience and usable interfaces is my biggest concern</p>
          <div>
            <h3>Tech Stack</h3>
            <ul>
              <li>Html5</li>
              <li>CSS</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2>Backend Development</h2>
          <p>User experience and usable interfaces is my biggest concern</p>
          <div>
            <h3>Tech Stack</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>Django</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2>Database Management</h2>
          <p>User experience and usable interfaces is my biggest concern</p>
          <div>
            <h3>Stack</h3>
            <ul>
              <li>Microrost SQL Server</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
