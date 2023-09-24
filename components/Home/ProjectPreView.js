import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ProjectPreview = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperSetting = {
    spaceBetween: 40,
    slidesPerView: 3,
    navigation: {
      prevEl: prevRef,
      nextEl: nextRef,
    },
  };
  return (
    <>
      <div className="w-full">
        <h3
          className="text-center text-5xl font-bold mb-32 text-yellow-800"
          data-aos="fade-up"
        >
          Project
        </h3>
        <div className="mx-36 flex relative">
          <span>
            <FontAwesomeIcon
              icon={faChevronLeft}
              ref={prevRef}
              className="text-4xl absolute top-[calc(50%-18px)] -left-7 cursor-pointer"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              ref={nextRef}
              className="text-4xl absolute top-[calc(50%-18px)] -right-9 cursor-pointer"
            />
          </span>
          <Swiper {...swiperSetting} data-aos="fade-up">
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/hischool-admin.png"
                  alt="고등학교 성적 관리 서비스(3차)"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  Back-end 협업
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="hischool-icon.png"
                    alt="고등학교 성적 관리서비스 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>고등학교 성적 관리 서비스(관리자)</span>
                </div>
                <span>React, Redux, TypeScript</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/hischool.png"
                  alt="고등학교 성적 관리 서비스(2차)"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  Back-end 협업
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="hischool-icon.png"
                    alt="고등학교 성적 관리서비스 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>고등학교 성적 관리 서비스(사용자 - 선생님, 학생)</span>
                </div>
                <span>React, Cookie, Token, Styled Component, Axios</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/travel-todo.png"
                  alt="여행 일정 관리 서비스"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  Back-end 협업
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="traveltodo-icon.png"
                    alt="여행 일정 관리 서비스 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>여행 일정 관리 서비스</span>
                </div>
                <span>
                  React, Ant Design, Styled Component, Axios, Full-Calendar
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/samsung.png"
                  alt="삼성 디스플레이 뉴스룸"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  Front-end 협업
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="samsung-icon.svg"
                    alt="삼성 디스플레이 뉴스룸 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>삼성 디스플레이 뉴스룸 클론코딩</span>
                </div>
                <span>HTML, CSS, JavaScript</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/daegu-city.png"
                  alt="대구광역시청"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  개인 프로젝트
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="daegu-icon.svg"
                    alt="대구광역시청 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>대구광역시청 클론코딩</span>
                </div>
                <span>HTML, CSS, JavaScript</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/anychem.png"
                  alt="애니켐"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  개인 프로젝트
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="anychem2.png"
                    alt="애니켐 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>애니켐 클론코딩</span>
                </div>
                <span>HTML, CSS, JavaScript</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-img w-full bg-white p-5 rounded-md m-2 cursor-pointer ease-in-out duration-300 hover:scale-101">
                <img
                  src="/interpark.png"
                  alt="인터파크"
                  className="w-full h-72 rounded-sm mb-5"
                />
                <span className="inline-block rounded-sm bg-amber-500 text-white px-1 mb-2">
                  개인 프로젝트
                </span>
                <div className="font-bold text-xl">
                  <img
                    src="interpark-icon.ico"
                    alt="인터파크 아이콘"
                    className="w-6 inline-block mb-2 mr-2"
                  />
                  <span>인터파크 클론코딩</span>
                </div>
                <span>HTML, CSS, JavaScript</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link href="/projects" className="text-white">
          프로젝트 바로가기
        </Link>
      </div>
    </>
  );
};

export default ProjectPreview;
