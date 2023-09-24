import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Link from "next/link";
import Animation from "@/components/Home/Animation";
import Profile from "@/components/Home/Profile";
import Skills from "@/components/Home/Skills";
import MainTitle from "@/components/Home/MainTitle";
import ProjectPreview from "@/components/Home/ProjectPreview";

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
    <Layout>
      <section className="title-pic min-h-screen text-gray-600 body-font flex flex-col items-start justify-center bg-black">
        <div className="title w-screen h-screen flex flex-col items-center justify-center">
          <div className="flex px-5 py-24 md:flex-row flex-col items-center">
            <MainTitle />
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
          <div className="w-full flex px-5 py-24 md:flex-row flex-col items-center">
            <Profile />
          </div>
        </div>
        <div className="w-screen h-screen flex flex-row items-center justify-center bg-slate-100">
          <div className="w-full flex md:flex-row flex-col items-center">
            <ProjectPreview />
          </div>
        </div>
        <div className="w-screen h-screen flex flex-row items-center justify-center bg-slate-200">
          <div className="w-full flex px-5 py-24 md:flex-row flex-col items-center">
            <Skills />
          </div>
        </div>
      </section>
    </Layout>
  );
}
