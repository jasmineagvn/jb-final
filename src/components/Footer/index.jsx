export default function Footer() {
  return (
    <footer className="md:p-[92px] px-5 py-20 bg-[#01B4BB] relative h-full w-full mt-20">
      <img
        src="/icons/ornamen-titik.png"
        alt=""
        className="absolute w-[150px] top-0"
      />
      <div className="md:relative flex flex-wrap md:flex-row gap-9 md:gap-0 justify-between">
        <div className="flex flex-col gap-6">
          <img src="/icons/logo.png" alt="" className="w-[98px]" />
          <h1 className="text-base text-white">Tempat Berkesempatan Baik.</h1>
          <div className="flex gap-5">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=janji.baikmedia@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/email.png" alt="emailfooter" className="transition-transform duration-300 hover:scale-110 hover:opacity-80"/>
            </a>
            <a href="https://www.instagram.com/janjibaik.id/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ig.png" alt="igfooter" className="transition-transform duration-300 hover:scale-110 hover:opacity-80"/>
            </a>
            <a href="https://www.linkedin.com/company/janji-baik/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkidn.png" alt="linkedinfooter" className="transition-transform duration-300 hover:scale-110 hover:opacity-80"/>
            </a>
            <a href="https://www.youtube.com/@janjibaik" target="_blank" rel="noopener noreferrer">
              <img src="/icons/yt.png" alt="ytfooter" className="transition-transform duration-300 hover:scale-110 hover:opacity-80" />
            </a>
            <a href="https://wa.me/62817170422" target="_blank" rel="noopener noreferrer">
              <img src="/icons/wa.png" alt="wafooter" className="transition-transform duration-300 hover:scale-110 hover:opacity-80" />
            </a>
          </div>
          <p class="text-sm text-white">Copyright ©2025 Janji Baik</p>
        </div>
        <div className="flex gap-20 w-full md:w-[340px]">
          <div className="flex flex-col gap-5">
            <h1 className="text-base text-white font-semibold">Informasi</h1>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="/tentangkami" className="text-base text-white whitespace-nowrap hover:underline underline-offset-4 transition-all duration-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/daftar" className="text-base text-white hover:underline underline-offset-4 transition-all duration-300">
                  Daftar
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:underline underline-offset-4 transition-all duration-300">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white hover:underline underline-offset-4 transition-all duration-300">
                  Donasi
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-base text-white font-semibold">Hubungi Kami</h1>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#" className="text-base text-white">
                  janji.baikmedia@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white">
                  0831 - 3828 - 6129
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-white">
                  Alesha House, Vanya Park Tangerang Regency, Banten
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="/icons/liuk.png"
        alt=""
        className="absolute w-[433px] h-[233px] bottom-0 right-0"
      />
    </footer>
  );
}
