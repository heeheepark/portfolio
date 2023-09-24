import Link from "next/link";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header className="text-gray-600 body-font fixed">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" legacyBehavior>
          <a className="flex title-font font-medium items-center text-yellow-900 mb-4 md:mb-0">
            <span>
              <img src="/logo.png" alt="" className="w-10 mr-3" />
            </span>
            <span className="text-xl">JooHee's Portfolio</span>
          </a>
        </Link>
      </div>
    </header>
  );
};
export default Header;
