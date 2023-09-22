import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectPreview = () => {
  return (
    <>
      <div className="w-full">
        <h3>Project</h3>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={50}
            navigation
          >
            <SwiperSlide>
              <div className="w-full">
                <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
                <span>여행 일정 관리 서비스 (Back-end 협업)</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
                <span>
                  고등학교 성적 관리 서비스(사용자 - 선생님, 학생) (Back-end
                  협업)
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
                <span>고등학교 성적 관리 서비스(관리자) (Back-end 협업)</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
                <span>삼성 디스플레이 뉴스룸 클론 (Front-end 협업)</span>
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
