import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

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
          Kelas Kreasi
        </h1>

        <div className="mt-12 flex flex-col gap-4 px-5 md:px-0">
          <img src="/icons/KelasKreasi/gambar1.png" alt="" />
          <div className="flex flex-wrap justify-between gap-4">
            <img
              src="/icons/KelasKreasi/gambar2.png"
              alt=""
              className="w-[565px]"
            />
            <img
              src="/icons/KelasKreasi/gambar2.png"
              alt=""
              className="w-[565px]"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <img
              src="/icons/KelasKreasi/gambar3.png"
              alt=""
              className="w-[565px]"
            />
            <div className="flex flex-wrap w-[565px] gap-4">
              <img
                src="/icons/KelasKreasi/gambar4.png"
                alt=""
                className="h-[385px]"
              />
              <img
                src="/icons/KelasKreasi/gambar5.png"
                alt=""
                className="h-[385px]"
              />
              <img
                src="/icons/KelasKreasi/gambar6.png"
                alt=""
                className="h-[385px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex flex-wrap w-[565px] gap-4">
              <img
                src="/icons/KelasKreasi/gambar7.png"
                alt=""
                className="h-[385px]"
              />
              <img
                src="/icons/KelasKreasi/gambar11.png"
                alt=""
                className="h-[385px]"
              />
              <img
                src="/icons/KelasKreasi/gambar12.png"
                alt=""
                className="h-[385px]"
              />
            </div>
            <img
                src="/icons/KelasKreasi/gambar9.png"
                alt=""
                className="w-[565px]"
              />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <img
              src="/icons/KelasKreasi/gambar13.png"
              alt=""
              className="w-[565px]"
            />
            <img
              src="/icons/KelasKreasi/gambar14.png"
              alt=""
              className="w-[565px]"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <img
                src="/icons/KelasKreasi/gambar15.png"
                alt=""
                className="w-[565px]"
              />
          </div>
        </div>

        <div className="mt-16 mx-8 md:mx-0 bg-[#EC901D] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer ">
          <a href="/galeri">
            <ChevronLeft className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
