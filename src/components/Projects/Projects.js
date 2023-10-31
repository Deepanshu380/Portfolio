import { FaGithubSquare } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
const Projects = () => {
  const projects = [
    {
      title: "StayNearU",
      desc: (
        <p>
          The web app enables you to submit a request.It automatically finds
          the nearest Pg with its filter feature.It helps users
          to find the best and nearest Pg to his/her college by using Google Map
          API, Google Auth, Chakra UI,Material UI (enhance performance by at least 7-9%).
        </p>
      ),
      techStack:
        "React, CSS, Firebase, Redux, React Router,GoogleMap API,Material UI,Chakra UI",
      src: "staynearu.png",
      website: true,
      websiteLink: "https://staynearu-30f69.web.app/",
      githubLink: "https://github.com/Deepanshu380/STAYNEARU",
    },

    {
      title: "Venatus -The Gaming Society of NSUT",
      desc: (
        <p>
          "Venatus -The Gaming Society of NSUT is all about promoting esports
          culture and team building games. Led the Front-End development of
          a dynamic gaming website, resulting in a 12 % increase
          in user engagement & Contributed to a [2%] increase in monthly active
          users."
          <br></br>
        </p>
      ),

      techStack: "Vite, React, Tailwind Framework, JavaScript, MERN ",
      src: "venatus.png",
      website: true,
      websiteLink: "https://www.venatus.in/",
      githubLink: "https://github.com/Deepanshu380/venatus_web_new",
    },

    {
      title: "Netflix Clone",
      desc: (
        <p>
          "Netflix is a cutting-edge web application that brings the magic of
          Netflix right to your fingertips. With its sleek design and
          user-friendly interface, Flixify offers an immersive streaming
          experience that rivals the original Netflix platform."
          <br></br>
        </p>
      ),
      techStack: "React,JavaScript,HTML,CSS,NextJs ",
      src: "netflix.png",
      website: true,
      websiteLink: "https://netflix-clone-17776.web.app/",
      githubLink: "https://github.com/Deepanshu380/Netflix-Clone",
    },
    {
      title: "Esports",
      desc: "Esports is a web front end which provides you to enroll for different LAN,Mobile Games Events and to see different fixtures & results.",
      techStack: "React,JavaScript, CSS ",
      src: "esports.png",
      website: true,
      websiteLink: "https://esports-web-o-code.netlify.app/",
      githubLink: "https://github.com/Deepanshu380/Esports",
    },

    {
      title: "WeatherLens",
      desc: "WeatherLens is a weather app which displays the current weather of any city/state fetched from the OpenWeatherMap API. It is unique as it also displays the population of capital cities.",
      techStack: "React,JavaScript, CSS",
      src: "proj3.png",
      website: true,
      websiteLink: "https://weather-io-react.vercel.app/",
      githubLink: "https://github.com/Deepanshu380/Weather-App",
    },
  ];
  return (
    <div id="projects" className="flex flex-col items-center text-white">
      <p className="text-2xl diff-font md:text-4xl font-bold uppercase p-4 m-4">
        Projects
      </p>
      <div className="grid md:block">
        {projects.map((item) => {
          return (
            <div className="translate-z">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={10}
                scale={1}
                perspective={4000}
                className="relative flex flex-col md:flex-row h-auto md:h-[250px] lg:h-[300px] w-[90%] md:w-[95%] max-w-[1400px] mx-auto bg-[#7EC8E3] rounded-lg bg-opacity-[0.1] justify-center border border-white border-opacity-20 items-center p-2 m-6"
                transitionSpeed={800}
              >
                <img
                  src={item.src}
                  className="h-auto md:h-[180px] lg:h-[250px] m-2 md:m-4 rounded-2xl z-50"
                  alt="thumb"
                />
                <div className=" flex flex-col justify-start z-50">
                  <h3 className="my-2 md:mb-1 lg:mb-2 text-l md:text-l min-[600px]:text-2xl lg:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="w-full h-[110px] md:h-[120] md:w-[90%] text-sm min-[600px]:text-base md:text-sm lg:text-base md:mb-5 lg:mb-24">
                    {item.desc}
                  </p>
                  <p className="md:absolute md:bottom-14 lg:bottom-20 my-3 text-sm min-[600px]:text-base md:text-sm lg:text-base">
                    <span className="font-bold">Tech Stack: </span>
                    {item.techStack}
                  </p>
                  <div
                    className={`md:absolute ${
                      item.website ? "md:bottom-2" : "my-3 md:bottom-3"
                    }  flex justify-center md:justify-bold items-center`}
                  >
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <FaGithubSquare className=" hover:scale-110 duration-500 w-[45px] h-[45px] lg:w-[65px] lg:h-[65px]" />
                    </a>
                    {item.website && (
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noreferrer"
                        class="relative text-xs lg:w-[180px] lg:text-base inline-flex items-center justify-center px-8 py-3 lg:px-10 lg:py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#7EC8E3] rounded-lg group m-4 hover:scale-110 duration-500 "
                      >
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#79A9F5] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span class="relative">View Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
