import { Button } from "@/components/ui/button";
import { MenuIcon, ChevronDown, } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

function MobileNavbar() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-6 mx-2">
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start border-[1px]"
              asChild
            >
              <Link to="/">Beranda</Link>
            </Button>

            {/* Menubar for "Tentang Kami" */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="flex items-center w-full justify-between">
                  Tentang Kami
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/tentangkami">Tentang Kami</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/jbonnews">JB On News</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/galeri">Galeri</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* Menubar for daftar */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="flex items-center w-full justify-between">
                  Daftar
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/daftarsiswa">Daftar Siswa</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/daftarrelawan">Daftar Relawan</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/daftarkolaborasi">Berkolaborasi</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start border-[1px]"
              asChild
            >
              <Link to="/program">Program</Link>
            </Button>

            {/* Menubar for donasi */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="flex items-center w-full justify-between">
                  Donasi
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/donasiberkala">Berkala Baik</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/donasiumum">Donasi Umum</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/kampanye">Kampanye</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start border-[1px]"
              asChild
            >
              <Link to="/kontakkami">Kontak Kami</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
