import { useTheme } from "@/components/themeprovider";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MobileNavbar() {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark"];

  const handleThemeChange = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(newTheme);
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex md:hidden">
      <button onClick={handleThemeChange}>
        {theme === "dark" && (
          <h1>
            <Moon></Moon>
          </h1>
        )}
        {theme === "light" && (
          <h1>
            <Sun></Sun>
          </h1>
        )}
      </button>

      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>janji baik</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-6 mx-2">
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/">Beranda</Link>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/service">Tentang Kami</Link>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/">Daftar</Link>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/">Program</Link>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/">Donasi</Link>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link to="/">Kontak Kami</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
