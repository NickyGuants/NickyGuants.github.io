import React from "react";

const About = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-neutral-100" id="about">
      <div className="w-10/12 flex flex-row py-16 bg-white shadow-xl px-6">
        <div className="w-2/3">
          <div className=" flex flex-row">
            <div className="w-1/4">
              <img src="https://avatars.githubusercontent.com/u/51677808?v=4" alt="Profile" className="rounded-full h-32" />
            </div>
            <div className="w-3/4 space-y-3 text-lg">
              <h1><span className="font-bold">Name: </span><span>Guantai Nicholas</span></h1>
              <h1><span className="font-bold">Email: </span><span>nicholasguantai528@gmail.com</span></h1>
              <h1><span className="font-bold">Phone: </span><span>+254-769530456</span></h1>
            </div>
          </div>
          <div className="py-8">
            <h1 className="text-center pb-4 font-bold">Skills</h1>
            <div className=" flex flex-row justify-between">
            <div>
              <h2 className="font-bold">Languages Profient</h2>
                <ul>
                  <li>Javascript</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>C++</li>
                </ul>
            </div>
            <div>
              <h2 className="font-bold">Frontend Development</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Bootsrap</li>
                  <li>Tailwind</li>
                  <li>React.js</li>
                  <li>Angular</li>
                </ul>
            </div>
            <div>
              <h2 className="font-bold">Backend Development</h2>
              <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Spring boot</li>
                  <li>Django</li>
                </ul>
            </div>
            <div>
              <h2 className="font-bold">Databases</h2>
              <ul>
                  <li>MongoDB</li>
                  <li>MS SQL Server</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="font-bold text-center">About Me</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam ea quod ex incidunt accusantium, doloribus, fugiat ad id voluptatum minus, maxime tempora ab deleniti provident itaque esse odit officiis.</p>
        </div>
      </div>
      
    </section>
  );
};

export default About;
