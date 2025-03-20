import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center m-4 gap-4 text-white "
    >
      <div className="flex flex-col xs:flex-row justify-center items-center gap-8 m-8">
        <p className="text-center xs:text-right diff-font font-bold text-2xl xs:text-4xl md:text-6xl">
          About <span className="inline xs:hidden">Me</span>
          <br className="hidden xs:block" />
          <span className="hidden xs:block">Me</span>
        </p>
        <p className="w-full xs:w-[60%] lg:w-[50%] text-sm xs:text-base md:text-2xl">
          <span className="font-bold">Hello! I'm Deepanshu, </span>A passionate
          Developer specializing in Frontend development with elementary
          knowledge in Backend technologies. With a keen eye for design and a
          love for vibrant websites, I aim to create captivating websites that
          users enjoy. <br /> <br /> Moving forward, I'm excited to expand my
          horizons beyond web development. Additionally, I'm good at Analytic
          skills as well.{" "}
        </p>
      </div>
      <div className="flex flex-col m-8">
        <p className="font-bold diff-font text-xl xs:text-2xl md:text-4xl text-center">
          My Punch
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 m-8">
          <div className="flex flex-col">
            <p className="text-base xs:text-xl md:text-2xl font-bold text-center">
              Frontend Development
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="html5-color.svg"
                alt="html5"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="css3-color.svg"
                alt="css3"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="javascript-color.svg"
                alt="javascript"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="react-color.svg"
                alt="react"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              {/* <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="nextdotjs-color.svg"
                alt="nextdotjs"
                className="white-filter w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              /> */}
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="tailwindcss-color.svg"
                alt="tailwindcss"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-base xs:text-xl md:text-2xl font-bold text-center">
              Backend Development
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="nodedotjs-color.svg"
                alt="nodedotjs"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
             
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="mysql-color.svg"
                alt="mysql"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="mongodb-color.svg"
                alt="mongodb"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 m-8">
          <div className="flex flex-col">
            <p className="text-base xs:text-xl md:text-2xl font-bold text-center">
              Tools and Frameworks
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="firebase-color.svg"
                alt="firebase"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="git-color.svg"
                alt="git"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="github-color.svg"
                alt="github"
                className="white-filter w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="redux-color.svg"
                alt="redux"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="reactrouter-color.svg"
                alt="reactrouter"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="material-ui-1.svg"
                alt="materialui"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="bootstrap-4.svg"
                alt="bootstrap"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="numpy-1.svg"
                alt="numpy"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-base xs:text-xl md:text-2xl font-bold text-center">
              Programming
            </p>
            <div className="grid grid-cols-2 place-items-center p-6">
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="cplusplus-color.svg"
                alt="cplusplus"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="python-color.svg"
                alt="python"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
              <motion.img
                drag
                dragSnapToOrigin
                dragConstraints={{
                  top: -25,
                  left: -25,
                  right: 25,
                  bottom: 25,
                }}
                src="java-4.svg"
                alt="java-4"
                className="w-[45px] h-[45px] xs:w-[60px] xs:h-[60px] m-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
