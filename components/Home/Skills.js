import React from "react";

const Skills = () => {
  return (
    <div className="w-full">
      <h3
        className="text-center text-5xl font-bold mb-20 text-orange-600"
        data-aos="fade-up"
      >
        Skills
      </h3>
      <div className="container m-auto px-24 flex flex-col gap-3">
        <div className="flex justify-start" data-aos="fade-right">
          <div className="flex flex-col items-center mr-5">
            <img
              src="/img/skills/react.png"
              alt=""
              className="w-10 h-10 mb-2"
            />
            <img src="/img/skills/redux.png" alt="" className="w-9 h-9" />
          </div>
          <p className="speech-bubble-react text-lg font-semibold">
            React를 사용하여 웹 서비스를 개발한 경험이 있습니다. <br />
            Component, State, Context API, Router에 대한 개념을 알고 사용할 수
            있습니다. <br />
            Hooks를 통해 상태값을 생성하고 관리할 수 있습니다.
          </p>
        </div>
        <div
          className="flex flex-row-reverse justify-start"
          data-aos="fade-left"
        >
          <img
            src="/img/skills/javascript.png"
            alt=""
            className="w-10 h-10 ml-5"
          />
          <p className="speech-bubble-javascript text-lg font-semibold">
            JavaScript 문법을 이해하고 활용할 수 있습니다. <br />
            Vanilla JavaScript로 필요한 기능을 구현할 수 있습니다.
          </p>
        </div>
        <div className="flex justify-start" data-aos="fade-right">
          <img
            src="/img/skills/typescript.png"
            alt=""
            className="w-10 h-10 mr-5"
          />
          <p className="speech-bubble-typescript text-lg font-semibold">
            TypeScript 셋팅 방법과 데이터 타입에 대해 이해하고 있습니다. <br />
            백엔드 3차 협업 프로젝트에서 TypeScript로 코드를 작성한 경험이
            있습니다.
          </p>
        </div>
        <div
          className="flex flex-row-reverse justify-start"
          data-aos="fade-left"
        >
          <img src="/img/skills/html.png" alt="" className="w-10 h-10 ml-5" />
          <p className="speech-bubble-html text-lg font-semibold">
            웹 표준과 웹 접근성을 준수한 HTML 코드를 작성할 수 있으며, <br />
            favicon, SEO 등을 적용할 수 있습니다.
          </p>
        </div>
        <div className="" data-aos="fade-right">
          <div className="flex justify-start">
            <img src="/img/skills/css.png" alt="" className="w-10 h-10 mr-5" />
            <p className="speech-bubble-css text-lg font-semibold">
              CSS 선택자와 여러 속성을 활용하여 원하는 UI를 구현할 수 있습니다.{" "}
              <br />
              Bootstarp, Ant-design, Tailwind 등 다양한 CSS 라이브러리를 사용할
              수 있습니다.
            </p>
          </div>
          <div className="flex gap-2 ml-16 mt-3">
            <img
              src="/img/skills/styled-component.png"
              alt=""
              className="w-8 h-8"
            />
            <img src="/img/skills/scss.jpg" alt="" className="w-8 h-8" />
            <img src="/img/skills/tailwind.png" alt="" className="w-8 h-8" />
            <img src="/img/skills/ant-design.png" alt="" className="w-8 h-8" />
            <img src="/img/skills/bootstrap.png" alt="" className="w-8 h-8" />
            <img src="/img/skills/swiper.png" alt="" className="w-8 h-8" />
          </div>
        </div>
        <div className="" data-aos="fade-left">
          <div className="flex flex-row-reverse justify-start">
            <img
              src="/img/skills/swagger.png"
              alt=""
              className="w-10 h-10 ml-5"
            />
            <p className="speech-bubble-swagger text-lg font-semibold">
              기본적인 Rest API 지식을 가지고 있으며, <br />
              다양한 협업 도구를 사용하여 프로젝트를 수행한 경험이 있습니다.
            </p>
          </div>
          <div className="flex flex-row-reverse gap-2 mr-16 mt-3">
            <img src="/img/skills/axios.png" alt="" className="w-8 h-8" />
            <img src="/img/skills/github.png" alt="" className="w-8 h-8" />
            <img src="/img/skills/notion.jpeg" alt="" className="w-8 h-8" />
            <img src="/img/skills/slack.png" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
