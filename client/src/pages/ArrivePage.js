/** @format */

import React, { useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Particles from "react-particles-js";

const ArrivePage = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    fontSize: "125px",
    config: { duration: 5000 }
  });
  const props2 = useSpring({
    opacity: 1,
    fontSize: "125px",
    from: { opacity: 0 },
    config: { duration: 3500 }
  });
  const props3 = useSpring({
    opacity: 1,
    fontSize: "125px",
    from: { opacity: 0 },
    config: { duration: 4750 }
  });
  const props4 = useSpring({
    opacity: 1,
    fontSize: "125px",
    from: { opacity: 0 },
    config: { duration: 4000 }
  });
  const props5 = useSpring({
    opacity: 1,
    fontSize: "125px",
    from: { opacity: 0 },
    config: { duration: 4250 }
  });

  return (
    <React.Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1803.4120608655228
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#000000"
              },
              polygon: {
                nb_sides: 4
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.4008530152163807,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 0.3687847739990702,
              width: 0.6413648243462091
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
      <div className="center" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <animated.div style={props}>D</animated.div>
          <animated.div style={props2}>R</animated.div>
          <animated.div style={props3}>E</animated.div>
          <animated.div style={props4}>A</animated.div>
          <animated.div style={props5}>M</animated.div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <animated.div style={props}>M</animated.div>
          <animated.div style={props2}>A</animated.div>
          <animated.div style={props3}>R</animated.div>
          <animated.div style={props4}>K</animated.div>
          <animated.div style={props}>E</animated.div>
          <animated.div style={props3}>T</animated.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArrivePage;
