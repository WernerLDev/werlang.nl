"use client";

import { useCallback, useContext, useMemo, useRef } from "react";
import Particles from "react-particles";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ThemeContext } from "@/context/theme-context";

export const ParticleBg = () => {
  const containerRef = useRef<Container | undefined>(undefined);
  const [theme, _] = useContext(ThemeContext);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      containerRef.current = container;
      //window.particlesContainer = container;
    },
    []
  );

  const config = useMemo<ISourceOptions>(() => {
    return {
      background: {
        color: {
          value: "none",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            //mode: "repulse",
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 400,
            links: {
              blink: true,
              consent: true,
              opacity: 1,
            },
          },
        },
      },

      particles: {
        color: {
          value: theme == "dark" ? "#087990" : "#9eeaf9", //6edff6
        },
        links: {
          color: theme == "dark" ? "#087990" : "#9eeaf9",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 150,
          },
          value: 5,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 10 },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};
