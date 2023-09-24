import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <>
      <Layout>
        <div className="fixed bottom-5 right-6 bg-slate-500 text-white w-10 h-10 text-center text-lg leading-extra-loose rounded-3xl z-50 cursor-pointer">
          <FontAwesomeIcon icon={faAnglesUp} />
        </div>
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
            <u>Team Project</u>
          </h4>
          <div className="inline-block">
            <div className="flex gap-14 justify-center">
              <div className=" bg-slate-500 w-1/4 h-80">
                <img src="" alt="" className="w-full h-full mb-3" />
                <div className="flex items-center gap-2 h-10">
                  <a
                    href="/"
                    className=" bg-slate-300 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <span>배포 페이지</span>
                  </a>
                  <a
                    href="/"
                    className="bg-slate-300 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <img
                      src="/github.png"
                      alt="깃허브 아이콘"
                      className="w-6 inline-block"
                    />
                    <span>Github</span>
                  </a>
                  <a
                    href="/"
                    className="bg-slate-300 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <img
                      src="/notion.png"
                      alt="노션 아이콘"
                      className="w-6 inline-block"
                    />
                    <span>Notion</span>
                  </a>
                </div>
              </div>
              <div className="inline-block">
                <div className="inline-block">
                  <div className="mb-4">
                    <h5 className="text-3xl font-bold mr-2 inline-block">
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
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Project;
