import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary relative">
      <Header />
      <div className="w-screen h-screen">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
