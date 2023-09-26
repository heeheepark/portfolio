import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
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
          className="text-center text-5xl font-bold mb-24 text-orange-600"
          data-aos="fade-up"
        >
          Project
        </h3>
        <div className="container m-auto" data-aos="fade-up">
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <Link
              href="/project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>Back-end 협업</u>
                  <span className="text-white text-xl font-bold">
                    고등학교 성적관리 서비스(관리자)
                  </span>
                </div>
              </div>
              <img src="/hischool-admin.png" alt="" className="w-full h-full" />
            </Link>
            <Link
              href="/project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>Back-end 협업</u>
                  <span className="text-white text-xl font-bold">
                    고등학교 성적관리 서비스(사용자)
                  </span>
                </div>
              </div>
              <img src="/hischool.png" alt="" className="w-full h-full" />
            </Link>
            <Link
              href="/project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>Back-end 협업</u>
                  <span className="text-white text-xl font-bold">
                    여행 일정 관리 서비스
                  </span>
                </div>
              </div>
              <img src="/travel-todo.png" alt="" className="w-full h-full" />
            </Link>
            <Link
              href="project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>Front-end 협업</u>
                  <span className="text-white text-xl font-bold">
                    삼성 디스플레이 뉴스룸 클론코딩
                  </span>
                </div>
              </div>
              <img src="/samsung.png" alt="" className="w-full h-full" />
            </Link>
            <Link
              href="/project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>개인 프로젝트</u>
                  <span className="text-white text-xl font-bold">
                    대구광역시청 클론코딩
                  </span>
                </div>
              </div>
              <img src="/daegu-city.png" alt="" className="w-full h-full" />
            </Link>
            <Link
              href="project"
              className="project-img w-1/4 h-72 bg-slate-300 relative cursor-pointer"
            >
              <div className="absolute w-full h-full opacity-0 hover:opacity-100">
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-60"></div>
                <div className="absolute left-5 bottom-6 text-white flex flex-col z-9">
                  <u>개인 프로젝트</u>
                  <span className="text-white text-xl font-bold">
                    인터파크 클론코딩
                  </span>
                </div>
              </div>
              <img src="/interpark.png" alt="" className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
