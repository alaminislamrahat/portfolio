import React, { useEffect, useRef } from "react";

const VantaNet = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVantaScripts = async () => {
      try {
        // Load Three.js
        if (!window.THREE) {
          const threeScript = document.createElement("script");
          threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
          threeScript.async = true;
          document.body.appendChild(threeScript);
          await new Promise((resolve) => (threeScript.onload = resolve));
        }

        // Load Vanta Dots script
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        await new Promise((resolve) => (vantaScript.onload = resolve));

        // Initialize Vanta effect once Vanta and Three.js are loaded
        if (window.VANTA && vantaRef.current) {
          window.VANTA.DOTS({
            el: vantaRef.current, // Element to apply the Vanta effect
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0, // Black background
          });
        }
      } catch (error) {
        console.error("Error loading Vanta scripts:", error);
      }
    };

    loadVantaScripts();

    // Cleanup Vanta effect on unmount
    return () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.DOTS.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ minHeight: "100vh", minWidth: "100vw", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default VantaNet;
