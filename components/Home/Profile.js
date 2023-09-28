import Link from "next/link";
import React from "react";
import Animation from "./Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
      <div className="w-full">
        <h3
          className="text-center text-5xl font-bold mb-16 text-orange-600"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Profile
        </h3>
        <div className="w-full flex justify-center items-center gap-32">
          <div className="mr-10" data-aos="fade-up" data-aos-duration="500">
            <img src="/profile.jpg" alt="" className="w-96 rounded-md" />
          </div>
          <div
            className="flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div>
              <span className="cate-name">Name</span>
              <span className="cate-content">박주희(Joohee Park)</span>
            </div>
            <div>
              <span className="cate-name">Birth</span>
              <span className="cate-content">1996. 12. 31 (만 26세)</span>
            </div>
            <div>
              <span className="cate-name">Phone</span>
              <span className="cate-content">+82)010-8611-7699</span>
            </div>
            <div>
              <span className="cate-name">Address</span>
              <span className="cate-content">
                Daegu, South Korea (거주지 이동 가능)
              </span>
            </div>
            <div>
              <span className="cate-name">Email</span>
              <a href="mailto:pjh9641@gmail.com" className="">
                <span className="cate-content decoration-solid">
                  pjh9641@gmail.com
                </span>
              </a>
            </div>
            <div>
              <span className="cate-name">Resume</span>
              <a href="/박주희 이력서.pdf" download>
                <span className="text-xl mr-2">
                  <FontAwesomeIcon icon={faFilePdf} />
                </span>
                <span className="cate-content decoration-solid">
                  프론트엔드 박주희 이력서.pdf
                </span>
              </a>
            </div>
            <div className="flex items-center gap-8 mt-6">
              <a href="/" className="flex items-center">
                <img src="/github.png" alt="" className="w-8 mr-3" />
                <span className="font-semibold text-2xl">Github</span>
              </a>
              <a href="/" className="flex items-center">
                <img src="/notion.png" alt="" className="w-8 mr-3" />
                <span className="font-semibold text-2xl">Notion</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
