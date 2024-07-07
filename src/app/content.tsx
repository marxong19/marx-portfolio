import React from "react";

export const Content = () => {
    return (
        <div className="flex flex-col items-start gap-10 relative">
            <div className="inline-flex items-start gap-2 px-20 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-display-semibold-m font-[number:var(--display-semibold-m-font-weight)] text-adaptivestrong text-3xl tracking-[var(--display-semibold-m-letter-spacing)] leading-[var(--display-semibold-m-line-height)] whitespace-nowrap [font-style:var(--display-semibold-m-font-style)]">
                    Collections
                </div>
            </div>
            <div className="flex flex-row items-start relative overflow-hidden w-full px-20">
              <div className="flex flex-col overflow-x-auto">
                <a href="#" className="flex-shrink-0">
                  <div className="w-[650px] h-96 bg-[#242424] rounded-[40px] border-solid border-transparent relative animate-slideIn">
                    <div className="w-[634px] mx-auto flex flex-col items-center justify-center gap-2 relative">
                      <img className="w-[634px] h-[275px] rounded-[32px] mt-2" alt="Logo" src="about-background.svg" />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <p className="text-white text-6xl font-bold">About Me</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="pl-4 pt-1">
                        <img className="relative w-20 h-20" alt="Nav item" src="about-button.svg" />
                      </div>
                      <div className="content-center">
                        <p className="mb-[5px]">My Portfolio</p>
                        <p className="text-[12px]">File 1.txt</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="flex-shrink-0 pt-[40px]">
                  <div className="w-[650px] h-96 bg-[#242424] rounded-[40px] border-solid border-transparent relative animate-slideIn">
                    <div className="w-[634px] mx-auto flex flex-col items-center justify-center gap-2 relative">
                      <img className="w-[634px] h-[275px] rounded-[32px] mt-2 object-cover" alt="Logo" src="projects-background.svg" />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <p className="text-white text-6xl font-bold">Coming Soon</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="pl-4 pt-1">
                        <img className="relative w-20 h-20" alt="Nav item" src="rocket-button.svg" />
                      </div>
                      <div className="content-center">
                        <p className="mb-[5px]">Stay tune!</p>
                        <p className="text-[12px]">Something is brewing!</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
          </div>
        </div>
    );
};
export default Content;












{/* <div className="flex flex-row items-start relative overflow-hidden w-full">
  <div className="flex flex-row overflow-x-auto">
    <a href="#" className="flex-shrink-0">
      <div className="w-[650px] h-96 bg-[#242424] rounded-[40px] border-solid border-transparent relative animate-slideIn">
        <div className="w-[634px] mx-auto flex flex-col items-center justify-center gap-2 relative">
          <img className="w-[634px] h-[275px] rounded-[32px] mt-2" alt="Logo" src="about-background.svg" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-white text-6xl font-bold">About Me</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="pl-4 pt-1">
            <img className="relative w-20 h-20" alt="Nav item" src="about-button.svg" />
          </div>
          <div className="content-center">
            <p className="mb-[5px]">My Portfolio</p>
            <p className="text-[12px]">File 1.txt</p>
          </div>
        </div>
      </div>
    </a>
    <a href="#" className="flex-shrink-0 pl-[40px]">
      <div className="w-[650px] h-96 bg-[#242424] rounded-[40px] border-solid border-transparent relative animate-slideIn">
        <div className="w-[634px] mx-auto flex flex-col items-center justify-center gap-2 relative">
          <img className="w-[634px] h-[275px] rounded-[32px] mt-2" alt="Logo" src="about-background.svg" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-white text-6xl font-bold">About Me</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="pl-4 pt-1">
            <img className="relative w-20 h-20" alt="Nav item" src="about-button.svg" />
          </div>
          <div className="content-center">
            <p className="mb-[5px]">My Portfolio</p>
            <p className="text-[12px]">File 1.txt</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</div> */}
