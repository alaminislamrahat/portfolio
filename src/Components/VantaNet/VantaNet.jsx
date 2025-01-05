import React, { useEffect, useRef } from "react";

const VantaNet = ({ children }) => {
  const vantaRef = useRef(null);
  let vantaEffect = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVantaEffect = async () => {
      try {
        // Load Three.js if not already loaded
        if (!window.THREE) {
          const threeScript = document.createElement("script");
          threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          threeScript.async = true;
          document.body.appendChild(threeScript);
          await new Promise((resolve) => (threeScript.onload = resolve));
        }

        // Load Vanta.NET script
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        await new Promise((resolve) => (vantaScript.onload = resolve));

        // Initialize Vanta.NET effect
        if (isMounted && window.VANTA && vantaRef.current) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: false, // Reduce interactivity for performance
            touchControls: false,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1, // Fixed scale for simplicity
            scaleMobile: 1,
            color: 0xfa5500,
            backgroundColor: 0x0,
            points: 10.0, // Reduce number of points for performance
            maxDistance: 15.0, // Increase distance to reduce connections
          });
        }
      } catch (error) {
        console.error("Error loading Vanta scripts:", error);
      }
    };

    loadVantaEffect();

    // Cleanup Vanta effect on unmount
    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default VantaNet;
