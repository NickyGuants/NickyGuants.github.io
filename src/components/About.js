import React from "react";

const About = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-neutral-100" id="about">
      <div className="w-10/12 flex flex-row py-16 bg-white shadow-xl px-16">
        <div className="w-full">
          <div className="w-full flex flex-row ">
            <div className="w-1/3 space-y-3">
              <div>
                <img src="https://avatars.githubusercontent.com/u/51677808?v=4" alt="Profile" className="rounded-full h-32" />
              </div>
              <div className="space-y-3 text-lg">
                <h1><span className="font-bold">Name: </span><span>Guantai Nicholas</span></h1>
                <h1><span className="font-bold">Email: </span><span>nicholasguantai528@gmail.com</span></h1>
                <h1><span className="font-bold">Phone: </span><span>+254-769530456</span></h1>
              </div>
            </div>
            <div className="w-2/3 ">
              <h1 className="font-bold text-center">About Me</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam ea quod ex incidunt accusantium, doloribus, fugiat ad id voluptatum minus, maxime tempora ab deleniti provident itaque esse odit officiis.</p>
            </div>
          </div>
          <div className="py-8">
            <h1 className="text-center pb-4 font-bold">Skills</h1>
          <div className=" flex flex-row justify-between">
            <div className="rounded-2xl bg-stone-100 basis-1/5 h-48">
              <h2 className="font-bold text-center pt-4">Languages Profient</h2>
                <ul className="flex flex-row flex-wrap h-4/5 p-4">
                  <li className="w-1/2">Javascript</li>
                  <li className="w-1/2">Java</li>
                  <li className="w-1/2">Python</li>
                  <li className="w-1/2">PHP</li>
                  <li className="w-1/2">C++</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-stone-100 basis-1/4">
              <h2 className="font-bold text-center pt-4">Frontend Development</h2>
                <ul className="flex flex-row flex-wrap h-4/5 p-4">
                  <li className="w-1/2">HTML</li>
                  <li className="w-1/2">CSS3</li>
                  <li className="w-1/2">Bootstrap</li>
                  <li className="w-1/2">Tailwind CSS</li>
                  <li className="w-1/2">React.js</li>
                  <li className="w-1/2">Angular</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-stone-100 basis-1/5">
              <h2 className="font-bold text-center pt-4">Backend Development</h2>
              <ul className="flex flex-row flex-wrap h-4/5 p-4">
                  <li className="w-1/2">Node.js</li>
                  <li className="w-1/2">Express.js</li>
                  <li className="w-1/2">Spring boot</li>
                  <li className="w-1/2">Django</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-stone-100 basis-1/4">
              <h2 className="font-bold text-center pt-4">Databases</h2>
              <ul className="flex flex-row flex-wrap h-4/5 p-4">
                  <li className="w-1/2">MongoDB</li>
                  <li className="w-1/2">MS SQL Server</li>
                  <li className="w-1/2">MySQL</li>
                  <li className="w-1/2">PostgreSQL</li>
                </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
