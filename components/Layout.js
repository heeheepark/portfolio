import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main bg-primary relative">
        <Header />
        {children}
        <Footer />
      </div>
      {/* <div className="absolute bottom-5 right-6 bg-slate-500 text-white w-10 h-10 text-center text-lg leading-extra-loose rounded-3xl z-50">
        <FontAwesomeIcon icon={faAnglesUp} />
      </div> */}
    </>
  );
};

export default Layout;
