import { useTheme } from "@/components/themeprovider";
import { Sun, Moon, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router";

function DesktopNavbar() {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark"];

  const handleThemeChange = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(newTheme);
  };

  return (
    <div className="hidden md:flex">
      <ul className="flex gap-10 items-center">
        <li>
          <Link to="/" className="text-gray-500 dark:text-white">
            Beranda
          </Link>
        </li>

        {/* tentang kami */}
        <details className="relative group">
          <summary className="flex items-center gap-2 text-gray-500 dark:text-white cursor-pointer list-none">
            <Link
              to="/tentangkami"
              className="text-gray-500 dark:text-white"
            >
              Tentang Kami
            </Link>
            <span className="ml-auto">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-white transition-transform"
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
            </span>
          </summary>

          <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px]  p-2 space-y-2 z-50 w-40">
            <li>
              <Link
                to="/jbonnews"
                className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
              >
                JB On News
              </Link>
            </li>
            <li>
              <Link
                to="/divisikami"
                className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
              >
                Divisi
              </Link>
            </li>
            <li>
              <Link
                to="/galeri"
                className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
              >
                Tim Kami
              </Link>
            </li>
          </ul>
        </details>

        {/* daftar */}
        <li>
          <details className="relative group">
            <summary className="flex items-center gap-1 text-gray-500 dark:text-white cursor-pointer list-none">
              Daftar
              <svg
                className="w-4 h-4 ml-1"
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
            </summary>
            <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px] p-2 space-y-2 z-50 w-40 hidden group-open:block">
              <li>
                <a
                  href="/daftarsiswa"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Daftar Siswa
                </a>
              </li>
              <li>
                <a
                  href="/daftarrelawan"
                  className="block px-3 py-2 text-[#00000080] whitespace-nowrap hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Daftar Relawan
                </a>
              </li>
              <li>
                <a
                  href="/daftarkolaborasi"
                  className="block px-3 py-2 text-[#00000080] whitespace-nowrap hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Berkolaborasi
                </a>
              </li>
            </ul>
          </details>
        </li>

        {/* program */}
        <li>
          <Link to="/program" className="text-gray-500 dark:text-white">
            Program
          </Link>
        </li>

        {/* donasi */}
        <li>
          <details className="relative group">
            <summary className="flex items-center gap-1 text-gray-500 dark:text-white cursor-pointer list-none">
              Donasi
              <svg
                className="w-4 h-4 ml-1"
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
            </summary>
            <ul className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-[12px] p-2 space-y-2 z-50 w-40 hidden group-open:block">
              <li>
                <a
                  href="/donasiberkala"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Berkala Baik
                </a>
              </li>
              <li>
                <a
                  href="/donasiumum"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Donasi Umum
                </a>
              </li>
              <li>
                <a
                  href="/donasiumum"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Kampanye
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a href="/kontakkami" className="text-gray-500 dark:text-white">
            Kontak Kami
          </a>
        </li>
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
          {theme === "system" && (
            <h1>
              <MonitorSmartphone></MonitorSmartphone>
            </h1>
          )}
        </button>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
