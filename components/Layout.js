import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary relative">
      <Header />
      <div className="h-screen overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
