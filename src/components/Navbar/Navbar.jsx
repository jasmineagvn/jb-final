import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto flex px-4 md:px-0 justify-between items-center my-2">
      <img src="/logo.png" alt="" className="w-[98px]" />
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
