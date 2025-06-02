import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import galeriData from "@/data/galeriData";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

function GaleriDetailViews() {
  const { id } = useParams();
  const galeri = galeriData.find((g) => g.id === parseInt(id));

  if (!galeri) {
    return (
      <div className="text-center py-10">
        <h2>Galeri Tidak Ditemukan</h2>
        <Link to="/galeri" className="text-blue-500 underline">
          Kembali ke Galeri
        </Link>
      </div>
    );
  }

  // Filter images and videos
  const images = galeri.images.filter((item) =>
    item.match(/\.(jpg|jpeg|png|gif)$/i)
  );
  const videos = galeri.images.filter((item) =>
    item.match(/\.(mp4|webm|ogg)$/i)
  );

  return (
    <>
      <Hero
        image={galeri.thumbnail}
        title={galeri.title}
        description={galeri.description}
        brightness="brightness-40"
      />
      <div className="flex justify-between items-center mb-15 mt-20">
        <h1 className="text-3xl pl-5 md:pl-12 font-bold whitespace-nowrap">Jejak Kebaikan Dalam Setiap Momen</h1>
        <img
          src="/icons/garis-news.png"
          alt=""
          className="w-[55%] h-1 hidden md:block"
        />
      </div>
      <div className="max-w-6xl mx-auto mt-9 px-5 lg:px-0">
        <h1 className="text-base font-bold text-[#01B4BB] border-b-2 pb-5 border-black">
          {galeri.title}
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 lg:px-0">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Galeri Gambar ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ))}
          {videos.map((video, idx) => (
            <video
              key={idx}
              controls
              className="w-full"
              preload="metadata"
              alt={`Galeri Video ${idx + 1}`}
            >
              <source src={video} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          ))}
        </div>
        <div className="mt-16 mx-8 md:mx-0 bg-[#EC901D] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer">
          <Link to="/galeri">
            <ChevronLeft className="text-white" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GaleriDetailViews;
