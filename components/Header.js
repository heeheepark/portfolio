import Link from "next/link";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font absolute">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="text-xl">
                프론트엔드 개발자 박주희 포트폴리오
              </span>
            </a>
          </Link>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Projects</a>
            </Link>
          </nav>
          <ToggleButton /> */}
        </div>
      </header>
    </>
  );
};
export default Header;
