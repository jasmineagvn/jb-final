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
        <h1 className="text-xl text-[#01B4BB] font-bold border-0 px-5 lg:px-0 border-b-2 border-black mb-7 pb-5">
          Pesta Ide Relawan
        </h1>

        <div className="mt-12 flex flex-col gap-4 px-5 md:px-0">
          <img src="/icons/PestaIdeRelawan/gambar1.png" alt="" />
          <div className="flex flex-wrap justify-between gap-4">
            <img
              src="/icons/PestaIdeRelawan/gambar2.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/PestaIdeRelawan/gambar3.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/PestaIdeRelawan/gambar4.png"
              alt=""
              className="w-full md:w-[565px]"
            />
            <img
              src="/icons/PestaIdeRelawan/gambar10.png"
              alt=""
              className="w-full md:w-[565px]"
            />
          </div>
          <img src="/icons/PestaIdeRelawan/gambar6.png" alt="" />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col w-full md:w-[565px] gap-4">
              <video src="/videogaleri/pestaiderelawan/k1.mp4" controls />
            </div>
            <div className="flex flex-col w-full md:w-[565px] gap-4">
              <video src="/videogaleri/pestaiderelawan/k4.mp4" controls />
            </div>
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
