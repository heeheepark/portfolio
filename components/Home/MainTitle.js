import Link from "next/link";
import Animation from "./Animation";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainTitle = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div
        data-aos="fade-up"
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 leading-8 items-center text-center"
      >
        <h2 className="text-8xl font-black leading-normal">
          {/* <span className="block text-6xl font-black leading-normal">
            안녕하십니까,
          </span> */}
          <span className="block">배움을 즐기는</span>
          <span className="inline-block mr-20">프론트엔드 개발자</span>
          <div className="inline-block relative">
            박주희
            <u className="absolute -left-3 bottom-0 inline-block w-80 border-black border-b-8"></u>
          </div>
        </h2>
        <div className="flex justify-center">
          {/* <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link> */}
        </div>
      </div>
      {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div> */}
    </>
  );
};
export default MainTitle;
