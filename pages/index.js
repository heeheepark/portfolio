import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Link from "next/link";
import Animation from "@/components/Home/Animation";
import Profile from "@/components/Home/Profile";
import Skills from "@/components/Home/Skills";
import MainTitle from "@/components/Home/MainTitle";
import ProjectPreview from "@/components/Home/ProjectPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const sectionRef = useRef();
  // useEffect(() => {
  //   const wheelhandler = (e) => {
  //     e.preventDefault();
  //   };
  //   console.log(sectionRef);
  //   const sectionRefCurrent = sectionRef.current;
  //   sectionRefCurrent.addEventLisnter("wheel", wheelhandler);
  //   return () => {
  //     sectionRefCurrent.removeEventListener("wheel", wheelhandler);
  //   };
  // }, []);

  return (
    <>
      <div className="absolute bottom-5 right-6 bg-slate-500 text-white w-10 h-10 text-center text-lg leading-extra-loose rounded-3xl z-50 cursor-pointer">
        <FontAwesomeIcon icon={faAnglesUp} />
      </div>
      <Layout>
        <section className="title-pic min-h-screen text-gray-600 body-font flex flex-col items-start justify-center">
          <div className="relative title w-screen h-screen flex flex-col items-end justify-center pr-10 pt-20">
            <div className="flex px-5 py-24 md:flex-row flex-col items-center">
              <MainTitle />
            </div>
          </div>
          <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
            <div className="w-full flex px-5 py-24 md:flex-row flex-col items-center">
              <Profile />
            </div>
          </div>
          <div className="w-screen h-screen flex flex-row items-center justify-center bg-gray-100">
            <div className="w-full flex md:flex-row flex-col items-center">
              <ProjectPreview />
            </div>
          </div>
          <div className="w-screen h-screen flex flex-row items-center justify-center bg-white">
            <div className="w-full flex px-5 py-24 md:flex-row flex-col items-center">
              <Skills />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
