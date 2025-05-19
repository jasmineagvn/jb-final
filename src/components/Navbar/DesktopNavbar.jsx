import { Link } from "react-router-dom";

function DesktopNavbar() {

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
                Team
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
                <Link
                  to="/daftarsiswa"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Daftar Siswa
                </Link>
              </li>
              <li>
                <Link
                  to="/daftarrelawan"
                  className="block px-3 py-2 text-[#00000080] whitespace-nowrap hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Daftar Relawan
                </Link>
              </li>
              <li>
                <Link
                  to="/daftarkolaborasi"
                  className="block px-3 py-2 text-[#00000080] whitespace-nowrap hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Berkolaborasi
                </Link>
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
                <Link
                  to="/donasiberkala"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Berkala Baik
                </Link>
              </li>
              <li>
                <Link
                  to="/donasiumum"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Donasi Umum
                </Link>
              </li>
              <li>
                <Link
                  to="/kampanye"
                  className="block px-3 py-2 text-[#00000080] hover:bg-[#5EC2C2] hover:text-white rounded-[12px]"
                >
                  Kampanye
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/kontakkami" className="text-gray-500 dark:text-white">
            Kontak Kami
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNavbar;
