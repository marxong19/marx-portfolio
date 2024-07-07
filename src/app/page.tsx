import Navbar from "@/app/nav";
import Contents from "@/app/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://marxong.com/",
  },
  keywords:"PiAPI, Midjourney API, Suno API, Dream Machine API, AI Apps",
  title: "Home - marx ong",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 px-40 py-10 relative bg-[#15161A]">
      <Navbar />
      <div className="flex flex-col max-w-[1440px] gap-40 self-stretch w-full items-start relative flex-[0_0_auto]">
        <div className="flex flex-col max-w-[800px] items-start gap-10 px-20
         py-10 relative self-stretch w-full flex-[0_0_auto] rounded-[40px]">
          <div className="relative w-fit mt-[-1.00px] text-[48px] font-display-semibold-l font-[number:var(--display-semibold-l-font-weight)] text-adaptivestrong tracking-[var(--display-semibold-l-letter-spacing)] leading-[var(--display-semibold-l-line-height)] whitespace-nowrap [font-style:var(--display-semibold-l-font-style)]">
            Marx Ong
          </div>
          <p className="relative self-stretch font-heading-regular-l font-[number:var(--heading-regular-l-font-weight)] text-transparent text-[16px] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] [font-style:var(--heading-regular-l-font-style)]">
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              Welcome to my portfolio, a versatile and imaginative explorer who skilfully navigates the realms of{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              product design
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              ,{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              technology
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              {" "}
              and{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              digital marketing
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              . With a keen eye for detail and a relentless pursuit of innovation, I am passionate about{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              visual narratives
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              , immersive{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              AI software
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              , and scalable{" "}
            </span>
            <span className="text-white font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              ventures
            </span>
            <span className="text-[#ffffff99] font-heading-regular-l [font-style:var(--heading-regular-l-font-style)] font-[number:var(--heading-regular-l-font-weight)] tracking-[var(--heading-regular-l-letter-spacing)] leading-[var(--heading-regular-l-line-height)] text-[length:var(--heading-regular-l-font-size)]">
              .
            </span>
          </p>
        </div>
        <Contents />
      </div>
      <footer className="flex flex-col items-center gap-6 px-0 py-20 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
        <p className="relative w-fit mt-[-1.00px] font-heading-regular-m font-[number:var(--heading-regular-m-font-weight)] text-transparent text-[length:var(--heading-regular-m-font-size)] text-center tracking-[var(--heading-regular-m-letter-spacing)] leading-[var(--heading-regular-m-line-height)] whitespace-nowrap [font-style:var(--heading-regular-m-font-style)]">
          <span className="text-[#ffffff99] font-heading-regular-m [font-style:var(--heading-regular-m-font-style)] font-[number:var(--heading-regular-m-font-weight)] tracking-[var(--heading-regular-m-letter-spacing)] leading-[var(--heading-regular-m-line-height)] text-[length:var(--heading-regular-m-font-size)]">
            Designed by{" "}
          </span>
          <span className="text-white font-heading-regular-m [font-style:var(--heading-regular-m-font-style)] font-[number:var(--heading-regular-m-font-weight)] tracking-[var(--heading-regular-m-letter-spacing)] leading-[var(--heading-regular-m-line-height)] text-[length:var(--heading-regular-m-font-size)]">
            Marx
          </span>
        </p>
      </footer>
    </div>
  );
}
