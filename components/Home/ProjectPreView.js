import Link from "next/link";
import React from "react";

const ProjectPreview = () => {
  return (
    <>
      <div className="w-full">
        <h3>Project</h3>
        <div className="flex gap-x-36">
          <div className="w-full">
            <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
            <span>여행 일정 관리 서비스 (Back-end 협업)</span>
          </div>
          <div className="w-full">
            <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
            <span>
              고등학교 성적 관리 서비스(사용자 - 선생님, 학생) (Back-end 협업)
            </span>
          </div>
          <div className="w-full">
            <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
            <span>고등학교 성적 관리 서비스(관리자) (Back-end 협업)</span>
          </div>
          <div className="w-full">
            <img src="" alt="" className="bg-red-200 w-full h-72 mr-5" />
            <span>삼성 디스플레이 뉴스룸 클론 (Front-end 협업)</span>
          </div>
        </div>
        <div>
          <Link href="/projects">프로젝트 바로가기</Link>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
