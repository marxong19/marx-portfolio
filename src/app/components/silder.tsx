// components/Slider.tsx
"use client";

import React, { useRef } from "react";

type SliderProps = {
  children: React.ReactNode;
};

const Slider: React.FC<SliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div ref={sliderRef} className="hidden-scrollbar smooth-scroll flex overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default Slider;
