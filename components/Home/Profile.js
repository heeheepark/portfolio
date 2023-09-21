import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const Profile = () => {
  return (
    <>
      <div className="w-full">
        <h3>Profile</h3>
        <div className="flex w-full">
          <div className="bg-red-200 w-full h-72 mr-5">
            {/* <img src={profileImg} alt="" /> */}
          </div>
          <div className="w-full">
            <div>
              <span className="cate-name">Name</span>
              <span className="cate-content">박주희(Joohee Park)</span>
            </div>
            <div>
              <span className="cate-name">Birth</span>
              <span className="cate-content">1996.12.31(만 26세)</span>
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
              <span className="cate-content">pjh9641@gmail.com</span>
            </div>
            <div>
              <a href="/">Github</a>
            </div>
            <div>
              <a href="/">Notion</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
