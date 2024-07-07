"use client";

import { useState } from 'react';

// Define the possible button names
type ButtonName = 'home' | 'about' | 'rocket' | 'linkedin' | 'instagram';

const Navigation = () => {
  const [hoveredButton, setHoveredButton] = useState<ButtonName | null>(null);

  const handleMouseEnter = (button: ButtonName) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttonStyles = (button: ButtonName) =>
    `${hoveredButton === button || (hoveredButton === null && button === 'home') ? 'bg-gray-300 rounded-[40px]' : 'bg-transparent'} 
    transition-all duration-300`;
  

  return (
    <div className="inline-flex items-center gap-2.5 fixed top-16 left-20">
      <div className="inline-flex flex-col items-center justify-center px-2 py-1 relative flex-[0_0_auto] rounded-[80px] overflow-hidden border border-[#141010] shadow-[0px_6px_9px_#00000099,0px_2px_3px_#0000001f,0px_1px_1px_#0000000a,0px_10px_20px_#00000066] backdrop-blur-xl backdrop-brightness-[0%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(0,0,0),rgba(255,255,255,0))_1, rounded-[80px], shadow] [background:linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_100%)] ">
        <div className="flex flex-col w-16 h-[257px] items-start absolute top-0 left-0"></div>

        <div
          className={`relative w-16 h-16 flex items-center justify-center ${buttonStyles('home')}`}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          <img className="relative w-12 h-12" alt="Home button icon" src="home-button.svg" />
          <div className="absolute w-1 h-1 top-[46px] left-[22px]" />
        </div>

        <img
          className={`relative w-16 h-16 ${buttonStyles('about')}`}
          alt="Nav item"
          src="about-button.svg"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className={`relative w-16 h-16 ${buttonStyles('rocket')}`}
          alt="Nav item"
          src="rocket-button.svg"
          onMouseEnter={() => handleMouseEnter('rocket')}
          onMouseLeave={handleMouseLeave}
        />

        <div className="flex items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 grow h-px bg-gray-400" />
        </div>

        <a
          className={`inline-flex items-start gap-2 p-1 relative flex-[0_0_auto] rounded-[40px] ${buttonStyles('linkedin')}`}
          href="https://www.linkedin.com/in/marx-ong-559022238/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="gap-2 p-1 rounded-xl inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex gap-2 items-start relative flex-[0_0_auto]">
              <div className="gap-2.5 inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-12 h-12 rounded-xl hover:bg-white" />
                <img className="absolute w-12 h-12" alt="Logo" src="linkedin-button.svg" />
              </div>
            </div>
          </div>
        </a>

        <a
          className={`inline-flex items-start gap-1 relative flex-[0_0_auto] rounded-[40px] ${buttonStyles('instagram')}`}
          href="https://instagram.com/marxzzxx"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="gap-1 p-1 rounded-lg inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex gap-2 items-start relative flex-[0_0_auto]">
              <div className="gap-1 inline-flex items-start relative flex-[0_0_auto]">
                <img className="relative w-12 h-12 object-cover" alt="Instagram" src="instagram-button.svg" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
