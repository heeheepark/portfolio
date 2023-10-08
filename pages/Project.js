import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Project = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <Link href="/">joohee's portfolio</Link>
      </header>
      <div
        className="fixed bottom-5 right-6 bg-slate-500 text-white w-10 h-10 text-center text-lg leading-extra-loose rounded-3xl z-50 cursor-pointer"
        onClick={handleToTop}
      >
        <FontAwesomeIcon icon={faAnglesUp} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <section className="container w-full mx-auto">
          <h3
            className="text-center text-5xl font-bold mb-32 pt-40 text-orange-600"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Projects
          </h3>
        </section>
        <section className="container mx-auto flex flex-col justify-center">
          <h4 className="text-3xl text-gray-800 font-semibold mb-5">
            {/* <u>Team Project</u> */}
          </h4>
          <div className="flex flex-col gap-32">
            <div className="flex gap-14 justify-center">
              <div className="project-img w-2/4 h-80">
                <img
                  src="/hischool-admin.png"
                  alt="3차 프로젝트 썸네일"
                  className="w-full h-full mb-3"
                />
                <div className="flex items-center gap-2 h-10">
                  <a
                    href="/"
                    className=" bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>배포 페이지</span>
                  </a>
                  <a
                    href="https://github.com/heeheepark/hischool-admin"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                  <a
                    href="/"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>Notion</span>
                  </a>
                </div>
              </div>
              <div className="w-3/4 inline-block">
                <div className="inline-block">
                  <div className="mb-4">
                    <h5 className="text-3xl font-extrabold mr-2 inline-block">
                      고등학교 성적관리 서비스(관리자)
                    </h5>
                    <span className="inline-block bg-yellow-300 px-2">
                      프론트엔드 팀원
                    </span>
                  </div>
                  <p className="inline-block text-lg mb-3">
                    백엔드와 협업으로 작업한 프로젝트입니다. <br />
                    고등학교 성적(내신, 모의고사)과 생활기록부를 간편하게 관리할
                    수 있는 서비스입니다. <br />
                    2차 프로젝트 기능을 보완하고, 관리자 페이지를
                    추가하였습니다. <br />
                  </p>
                </div>
                <ul className="">
                  <li className="flex mb-2">
                    <span className="cate-name">주요 기능</span>
                    <ul className="text-lg inline-block">
                      <li>
                        <span className="inline-block mr-1">
                          1. 선생님/학생 페이지
                        </span>
                        <span>- 생활기록부(성적현황, 출결현황, 진로지도)</span>
                      </li>
                      <li>
                        <span className="inline-block mr-1">
                          2. 관리자 페이지
                        </span>
                        <span>
                          - 공지사항 작성 및 관리, 교원 관리 및 가입 승인 처리 ,
                          학생 관리
                        </span>
                      </li>
                      <li>
                        <span className="block">3. 2차 프로젝트 기능 강화</span>
                        <span className="block ml-3">
                          - 학교 검색 자동완성기능 적용
                        </span>
                        <span className="block ml-3">
                          - 학년, 반 드롭다운 선택
                        </span>
                        <span className="block ml-3">
                          - 내신 성적(등급, 석차) 자동 계산
                        </span>
                        <span className="block ml-3">- 성적확정 기능 추가</span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 기간</span>
                    <span className="text-lg">
                      2023. 08. 21. ~ 2023. 09. 14.(총 25일)
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="cate-name">활용 기술</span>
                    <span className="inline-block text-lg w-3/5">
                      React, Redux, TypeScript, Styled-Component, Full-Calendar,
                      React Pagination, Nivo Chart, Cookie, Token, Axios
                    </span>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 영역</span>
                    <div>
                      <span className="block text-lg">
                        요구사항 명세서, 스토리보드
                      </span>
                      <span className="text-lg">
                        관리자 메인, 학생 관리, 학생/선생님 생활기록부
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-14 justify-center">
              <div className="project-img w-2/4 h-80">
                <img
                  src="/hischool.png"
                  alt="2차 프로젝트 썸네일"
                  className="w-full h-full mb-3"
                />
                <div className="flex items-center gap-2 h-10">
                  <a
                    href="/"
                    className=" bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>배포 페이지</span>
                  </a>
                  <a
                    href="/https://github.com/heeheepark/hischool"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                  <a
                    href="/"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>Notion</span>
                  </a>
                </div>
              </div>
              <div className="w-3/4 inline-block">
                <div className="inline-block">
                  <div className="mb-4">
                    <h5 className="text-3xl font-extrabold mr-2 inline-block">
                      고등학교 성적관리 서비스(사용자)
                    </h5>
                    <span className="inline-block bg-yellow-300 px-2 mr-2">
                      총괄 팀장
                    </span>
                    <span className="inline-block bg-yellow-300 px-2">
                      프론트엔드 팀장
                    </span>
                  </div>
                  <p className="inline-block text-lg mb-3">
                    백엔드와 협업으로 작업한 프로젝트입니다. <br />
                    고등학교 성적(내신, 모의고사)을 간편하게 관리할 수 있는
                    서비스입니다. <br />
                    회원가입, 로그인 및 사용자(학생/선생님) 페이지를
                    구현하였습니다. <br />
                  </p>
                </div>
                <ul className="">
                  <li className="flex mb-2">
                    <span className="cate-name">주요 기능</span>
                    <ul className="text-lg inline-block">
                      <li>
                        <span className="inline-block mr-1">
                          1. 성적 현황 제공
                        </span>
                        <span className="block ml-3">
                          - 학생: 주요 과목 최고 등급, 현재 등급, 최근 응시 시험
                          등급
                        </span>
                        <span className="block ml-3">
                          - 선생님: 최근 응시 시험 학급 성적 현황(내신,
                          모의고사)
                        </span>
                      </li>
                      <li>
                        <span className="inline-block mr-1">
                          2. 학급별 시간표 제공
                        </span>
                      </li>
                      <li>
                        <span className="block">
                          3. (학생) 급식표 제공: 주간, 월간 급식표
                        </span>
                      </li>
                      <li>
                        <span className="block">
                          4. (선생님) 학사 일정 제공: 해당 년도 학사 일정
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 기간</span>
                    <span className="text-lg">
                      2023. 07. 14 ~ 2023. 08. 16.(총 33일)
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="cate-name">활용 기술</span>
                    <span className="inline-block text-lg w-3/5">
                      React, Styled-Component, Full-Calendar, Nivo Chart,
                      Cookie, Token, Axios
                    </span>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 영역</span>
                    <div>
                      <span className="block text-lg">
                        기획 총괄, 요구사항 명세서, 스토리보드, FE Github 관리
                      </span>
                      <span className="text-lg">
                        헤더, 사이드 영역, 학생/선생님 메인 홈, 학생 페이지
                        전체, (선생님) 성적 관리
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-14 justify-center">
              <div className="project-img w-2/4 h-80">
                <img
                  src="/travel-todo.png"
                  alt="1차 프로젝트 썸네일"
                  className="w-full h-full mb-3"
                />
                <div className="flex items-center gap-2 h-10">
                  <a
                    href="/"
                    className=" bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>배포 페이지</span>
                  </a>
                  <a
                    href="/https://github.com/heeheepark/travel-todo"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                  <a
                    href="/"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>Notion</span>
                  </a>
                </div>
              </div>
              <div className="w-3/4 inline-block">
                <div className="inline-block">
                  <div className="mb-4">
                    <h5 className="text-3xl font-extrabold mr-2 inline-block">
                      여행 일정 관리 서비스
                    </h5>
                    <span className="inline-block bg-yellow-300 px-2">
                      프론트엔드 팀원
                    </span>
                  </div>
                  <p className="inline-block text-lg mb-3">
                    백엔드와 협업으로 작업한 프로젝트입니다. <br />
                    여행 일정부터 체크리스트까지 여행 일정 간편하게 관리할 수
                    있는 서비스입니다. <br />
                    지도와 캘린더 두 개의 모드를 통해 사용자의 취향에 맞는 UI를
                    구현할 수 있습니다. <br />
                  </p>
                </div>
                <ul className="">
                  <li className="flex mb-2">
                    <span className="cate-name">주요 기능</span>
                    <ul className="text-lg inline-block">
                      <li>
                        <span className="inline-block mr-1">1. Map</span>
                        <span className="block ml-3">
                          - 지역별 여행 기록 표시
                        </span>
                        <span className="block ml-3">
                          - 여행 빈도에 따른 색상 구분
                        </span>
                        <span className="block ml-3">
                          - 예정・종료된 일정 필터링
                        </span>
                      </li>
                      <li>
                        <span className="inline-block mr-1">2. Calendar</span>
                        <span className="block ml-3">
                          - 여행 일정을 한 눈에 확인 가능
                        </span>
                        <span className="block ml-3">
                          - 일정 색상 커스터마이징 기능
                        </span>
                      </li>
                      <li>
                        <span className="block">3. 일정 등록</span>
                        <span className="block ml-3">
                          - 일정 및 체크리스트 등록
                        </span>
                        <span className="block ml-3">
                          - 일정 시작 후 리뷰 등록 가능
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 기간</span>
                    <span className="text-lg">
                      2023. 06. 21. ~ 2023. 07. 13.(총 23일)
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="cate-name">활용 기술</span>
                    <span className="inline-block text-lg w-3/5">
                      React, Ant Design, Styled Component, Full-Calendar, Axios
                    </span>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 영역</span>
                    <div>
                      <span className="block text-lg">
                        요구사항 명세서, 스토리보드
                      </span>
                      <span className="text-lg">
                        인트로, 캘린더, 일정 등록 및 수정, 프로젝트 소개 페이지
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-14 justify-center">
              <div className="project-img w-2/4 h-80">
                <img
                  src="/samsung.png"
                  alt="삼성 디스플레이 뉴스룸 썸네일"
                  className="w-full h-full mb-3"
                />
                <div className="flex items-center gap-2 h-10">
                  <a
                    href="/"
                    className=" bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>배포 페이지</span>
                  </a>
                  <a
                    href="/https://github.com/heeheepark/samsung-display-newsroom-clone-coding"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                  <a
                    href="/"
                    className="bg-blue-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>Notion</span>
                  </a>
                </div>
              </div>
              <div className="w-3/4 inline-block">
                <div className="inline-block">
                  <div className="mb-4">
                    <h5 className="text-3xl font-extrabold mr-2 inline-block">
                      삼성 디스플레이 뉴스룸 클론코딩
                    </h5>
                    <span className="inline-block bg-yellow-300 px-2">
                      프론트엔드 팀장
                    </span>
                  </div>
                  <p className="inline-block text-lg mb-3">
                    프론트엔드 협업으로 작업한 프로젝트입니다. <br />
                    삼성 디스플레이 뉴스룸 페이지를 클론코딩했습니다. <br />
                  </p>
                </div>
                <ul className="">
                  {/* <li className="flex mb-2">
                    <span className="cate-name">주요 기능</span>
                    <ul className="text-lg inline-block">
                      <li>
                        <span className="inline-block mr-1">1. Map</span>
                        <span className="block ml-3">
                          - 지역별 여행 기록 표시
                        </span>
                        <span className="block ml-3">
                          - 여행 빈도에 따른 색상 구분
                        </span>
                        <span className="block ml-3">
                          - 예정・종료된 일정 필터링
                        </span>
                      </li>
                      <li>
                        <span className="inline-block mr-1">2. Calendar</span>
                        <span className="block ml-3">
                          - 여행 일정을 한 눈에 확인 가능
                        </span>
                        <span className="block ml-3">
                          - 일정 색상 커스터마이징 기능
                        </span>
                      </li>
                      <li>
                        <span className="block">3. 일정 등록</span>
                        <span className="block ml-3">
                          - 일정 및 체크리스트 등록
                        </span>
                        <span className="block ml-3">
                          - 일정 시작 후 리뷰 등록 가능
                        </span>
                      </li>
                    </ul>
                  </li> */}
                  <li className="flex mb-2">
                    <span className="cate-name">작업 기간</span>
                    <span className="text-lg">
                      2023. 05. 01. ~ 2023. 05. 17.(총 17일)
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="cate-name">활용 기술</span>
                    <span className="inline-block text-lg w-3/5">
                      HTML5, CSS, JavaScript, Swiper
                    </span>
                  </li>
                  <li className="flex mb-2">
                    <span className="cate-name">작업 영역</span>
                    <div>
                      <span className="block text-lg">
                        Github 및 Notion, Slack 관리
                      </span>
                      <span className="text-lg">
                        Header, 최신 기사, YouTube 핫클립, 인기 기사
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Project;
