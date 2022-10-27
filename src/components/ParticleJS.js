import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
const ParticleJS = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#212121",
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 70,
          },
        },
      },
      particles: {
        color: {
          value: "#14ffec",
        },
        links: {
          color: "#14ffec",
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInit} options={options} iid={props.id} />;
};

export default ParticleJS;
