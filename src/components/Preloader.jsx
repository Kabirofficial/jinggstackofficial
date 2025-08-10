import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

export default function Preloader({ onFinish }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.08,
      ease: "power3.out",
      duration: 1,
    });

    gsap.to(containerRef.current, {
      opacity: 0,
      delay: 2.5,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: onFinish,
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <h1
        ref={textRef}
        className="text-4xl font-bold tracking-wide"
        style={{
          color: "rgba(178, 102, 255, 0.9)", 
          textShadow:
            "0 0 10px rgba(178, 102, 255, 0.7), 0 0 20px rgba(102, 0, 153, 0.7)",
        }}
      >
        Loading JinggStack...
      </h1>
    </div>
  );
}