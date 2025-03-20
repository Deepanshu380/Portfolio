import ReactTyped from "react-typed";
import { Link } from "react-scroll";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SiLeetcode, SiLinktree } from "react-icons/si";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" text-white flex flex-col md:flex-row justify-center items-center mx-auto w-full max-w-[500px] md:max-w-[750px] lg:max-w-[1000px] h-[90vh]"
    >
      <div className="flex flex-col justify-center mr-5 text-center md:text-left">
        <p className="font-bold text-sm xs:text-md md:text-xl p-2">Hi! I'm</p>
        <p className="font-bold text-3xl xs:text-4xl md:text-5xl p-2 text-[#7EC8E3]">
          DEEPANSHU
        </p>
        <div className="flex font-bold text-2xl md:text-3xl p-2 justify-center md:justify-normal">
          <p className="hidden md:block">I'm</p>
          <ReactTyped
            className="pl-2 text-[#79A9F5]"
            strings={["A Crazy Developer", "An Aviation Enthusiast"]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </div>
        <div className="flex items-center mt-6">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400}
            className="relative inline-flex items-center justify-center px-8 py-3 xs:px-10 xs:py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#7EC8E3] rounded-lg group m-4  text-xs xs:text-sm md:text-base hover:scale-110 duration-500"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#79A9F5] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative">My Projects</span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            className="relative inline-flex items-center justify-center px-8 py-3 xs:px-10 xs:py-4 overflow-hidden tracking-tighter text-black font-bold bg-[#7EC8E3] rounded-lg group m-4  text-xs xs:text-sm md:text-base hover:scale-110 duration-500"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#79A9F5] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative">About Me</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-[60%] md:w-auto">
        <img
          src="result.png"
          alt="deep"
          className="w-[80%] md:w-full max-w-[400px] mx-auto"
        />
        <div className="flex p-4 mt-4 justify-evenly items-center -ml-4">
          <a
            href="https://github.com/Deepanshu380"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              size={40}
              className="  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deepanshu380/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={40}
              className="  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://leetcode.com/u/Itachi_Uchiha_01/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode
              size={40}
              className=" hover:scale-125 ease-in-out duration-500 w-[30px]
            h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
          <a
            href="https://leetcode.com/u/Deepanshu018/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode
              size={40}
              className=" hover:scale-125 ease-in-out duration-500 w-[30px]
            h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>

          <a
            href="https://linktr.ee/Deepanshu380"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinktree
              size={40}
              className="  hover:scale-125 ease-in-out duration-500 w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
