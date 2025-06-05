import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function DesktopNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="hidden md:flex" ref={navbarRef}>
      <ul className="flex gap-10 items-center">
        <li>
          <Link to="/" className="text-gray-500 dark:text-white hover:text-[#5EC2C2]">
            Beranda
          </Link>
        </li>

        {/* Tentang Kami */}
        <li className="relative">
          <div className="flex items-center gap-2 text-gray-500 dark:text-white hover:text-[#5EC2C2]">
            <Link to="/tentangkami">
              Tentang Kami
            </Link>
            <button
              onClick={() => toggleDropdown("tentang")}
              className="focus:outline-none  cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
              
          </div>
          {openDropdown === "tentang" && (
            <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px] p-2 space-y-2 z-50 w-40">
              <li>
                <Link
                  to="/jbonnews"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  JB On News
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Team
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Daftar */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("daftar")}
            className="flex items-center gap-2 text-gray-500 dark:text-white cursor-pointer hover:text-[#5EC2C2]"
          >
            Daftar
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openDropdown === "daftar" && (
            <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px] p-2 space-y-2 z-50 w-40">
              <li>
                <Link
                  to="/syaratdaftarsiswa"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Daftar Siswa
                </Link>
              </li>
              <li>
                <Link
                  to="/daftarrelawan"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Daftar Relawan
                </Link>
              </li>
              <li>
                <Link
                  to="/daftarkolaborasi"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Berkolaborasi
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Program */}
        <li>
          <Link
            to="/program"
            className="text-gray-500 dark:text-white cursor-pointer hover:text-[#5EC2C2]"
          >
            Program
          </Link>
        </li>

        {/* Donasi */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("donasi")}
            className="flex items-center gap-2 text-gray-500 dark:text-white cursor-pointer hover:text-[#5EC2C2]"
          >
            Donasi
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openDropdown === "donasi" && (
            <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px] p-2 space-y-2 z-50 w-40">
              <li>
                <Link
                  to="/donasiberkala"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Berkala Baik
                </Link>
              </li>
              <li>
                <Link
                  to="/donasiumum"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Donasi Umum
                </Link>
              </li>
              <li>
                <Link
                  to="/kampanye"
                  className="block px-3 py-2 hover:bg-[#5EC2C2] text-gray-500 hover:text-white rounded-[12px]"
                >
                  Kampanye
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Kontak Kami */}
        <li>
          <Link
            to="/kontakkami"
            className="text-gray-500 dark:text-white cursor-pointer hover:text-[#5EC2C2]"
          >
            Kontak Kami
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
