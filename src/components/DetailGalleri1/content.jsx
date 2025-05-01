import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function Content() {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl pl-6 md:pl-14 font-semibold">
          Jejak Kebaikan dalam Setiap Momen
        </h1>
        <img
          src="/icons/garis-news.png"
          alt=""
          className="w-[50%] hidden md:block"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-xl text-[#01B4BB] font-bold border-b-2 border-black mb-7 pb-5">
          Pesta Ide Relawan
        </h1>

        <div className="mt-12 flex flex-col gap-4 px-5 md:px-0">
          <img src="/icons/galeri2/gambar1.png" alt="" />
          <div className="flex flex-wrap justify-between gap-4">
            <img
              src="/icons/galeri2/gambar2.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/galeri2/gambar3.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/galeri2/gambar4.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/galeri2/gambar5.png"
              alt=""
              className="w-full md:w-[565px]"
            />
          </div>
          <img src="/icons/galeri2/gambar6.png" alt="" />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col w-full md:w-[565px] gap-4">
              <img src="/icons/galeri2/gambar7.png" alt="" />
              <img src="/icons/galeri2/gambar8.png" alt="" />
              <img src="/icons/galeri2/gambar8.png" alt="" />
            </div>
            <div className="flex flex-col w-full md:w-[565px] gap-4">
              <img src="/icons/galeri2/gambar9.png" alt="" />
              <img src="/icons/galeri2/gambar10.png" alt="" />
              <img src="/icons/galeri2/gambar11.png" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 md:mx-0 bg-[#EC901D] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer ">
          <Link to="/galeri">
            <ChevronLeft className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
