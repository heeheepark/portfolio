import Link from "next/link";
import Animation from "./Animation";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NameText from "./NameText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const MainTitle = () => {
  const [turnOnLight, setTurnOnLight] = useState(false);

  const handleLight = () => {
    setTurnOnLight(!turnOnLight);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className={`${
        turnOnLight ? "title-white" : "title-black"
      } w-screen h-screen`}
    >
      <div>
        {turnOnLight ? (
          <img
            src="/onbulb.png"
            alt="켜진 전구"
            className="absolute -top-10 left-[calc(50%-40px)] w-20"
          />
        ) : (
          <img
            src="/offbulb.png"
            alt="꺼진 전구"
            className="off-light absolute -top-10 left-[calc(50%-40px)] w-20"
          />
        )}
      </div>
      <div
        className="light absolute -top-10 right-10 cursor-pointer transition ease-in hover:top-0 duration-300 flex flex-col items-center"
        onClick={handleLight}
      >
        <img
          src="/lightwhite.png"
          alt=""
          className={`${turnOnLight && "light-switch"} w-5 mb-4`}
        />
        <div className={`${turnOnLight ? "text-black" : "text-white"}`}>
          <FontAwesomeIcon icon={faAnglesDown} className="mr-1" />
          <span>{`Turn ${turnOnLight ? "off" : "on"} a light`}</span>
        </div>
      </div>

      {turnOnLight ? (
        <div
          className="flex justify-center items-center w-full h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-8xl font-black leading-normal mt-32">
            <p className="block">
              <span className=" text-orange-500">배움</span>을 즐기는
            </p>
            <span className="inline-block mr-10 text-black">
              프론트엔드 개발자
            </span>
            <div className="inline-block relative w-72 text-orange-600">
              박주희{/* <NameText /> */}
              {/* <u className="absolute -left-3 bottom-0 inline-block w-80 border-black border-b-8"></u> */}
            </div>
          </h2>
        </div>
      ) : (
        <div className="flex w-full h-full pl-32 pt-16">
          <h2
            className="text-8xl font-black leading-normal mt-32 relative z-99"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="block mr-10 text-gray-300">Front-end Developer</p>
            <span className="block relative text-white text-9xl">
              JooHee Park
            </span>
            {/* <span className="text-2xl text-white font-normal">
              Please turn on a light
            </span> */}
          </h2>
        </div>
      )}
    </div>
  );
};
export default MainTitle;
