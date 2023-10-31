import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback} from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About/About";
import AnimatedCursor from "react-animated-cursor"

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="app">
      <Toaster/>
      <AnimatedCursor 
        trailingSpeed={10}
        color="0,0,0"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          // border: '2px solid white',
          backgroundColor: 'white',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          // border: '2px solid white',
          backgroundColor: 'white',
          mixBlendMode: 'exclusion'
        }}
      />
      <Particles
        className=" fixed -z-50 translate-z-negative"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 120,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#4B7BF5",
            },
            links: {
              color: "#4B7BF5",
              distance: 100,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 300,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: false,
        }}
      />
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
