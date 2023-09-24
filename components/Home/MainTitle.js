import Link from "next/link";
import Animation from "./Animation";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NameText from "./NameText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const MainTitle = () => {
  const [turnOnLight, setTurnOnLight] = useState(true);

  const handleLight = () => {
    setTurnOnLight(!turnOnLight);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* <div>
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
            className="absolute -top-10 left-[calc(50%-40px)] w-20"
          />
        )}
      </div>
      <div
        className="absolute -top-10 right-10 cursor-pointer transition ease-in hover:top-0 duration-300 flex flex-col items-center"
        onClick={handleLight}
      >
        <img src="/lightwhite.png" alt="" className="w-5 mb-4" />
        <div className="text-white">
          <FontAwesomeIcon icon={faAnglesDown} className="mr-1" />
          <span>Turn on a light</span>
        </div>
      </div> */}
      <div
        data-aos="fade-up"
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-row items-end md:items-start md:text-left mb-16 md:mb-0 leading-8 text-center"
      >
        <img
          src="/joohee.png"
          alt=""
          className="absolute bottom-0 left-12 w-2/6 h-4/5 mr-20"
        />
        <h2 className="flex flex-row">
          {/* <div className="text-9xl">💡</div> */}
          <div className="text-8xl font-black leading-normal mt-32">
            <p className="block">
              <span className=" text-orange-500">배움</span>을 즐기는
            </p>
            <span className="inline-block mr-10 text">프론트엔드 개발자</span>
            <div className="inline-block relative w-72 text-orange-600">
              박주희{/* <NameText /> */}
              {/* <u className="absolute -left-3 bottom-0 inline-block w-80 border-black border-b-8"></u> */}
            </div>
          </div>
        </h2>

        <div className="flex justify-center"></div>
      </div>
    </>
  );
};
export default MainTitle;
