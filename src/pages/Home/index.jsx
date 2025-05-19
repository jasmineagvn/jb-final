import React, { Suspense } from "react";
import Footer from "@/components/Footer";

const Hero = React.lazy(() => import("../../components/Hero"));
const Misi = React.lazy(() => import("./misi"));
const EducationCards = React.lazy(() => import("./educard"));
const ProgramUnggulan = React.lazy(() => import("./program"));
const Testimoni = React.lazy(() => import("./testi"));
const PartnerSection = React.lazy(() => import("./kolaborasi"));

// Simple Skeleton Loader for Hero
function HeroSkeleton() {
  return (
    <div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg flex flex-col justify-center items-center">
      <div className="w-3/4 h-12 bg-gray-300 rounded mb-4"></div>
      <div className="w-1/2 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero
          image="/background.png"
          title="Sekolah Inovatif Untuk Masa Depan Tanpa Hambatan"
          description="Kami percaya bahwa setiap anak memilihi hak untuk mendapatkan akses pendidikan yang berkualitas dan memiliki potensi besar untuk sukses.Sekolah teknologi janji baik hadir untuk mewujudkan impian tanpa hambatan biaya."
        >
          {/* tombol dan statistik di dalam Hero */}
          <div className="flex flex-col md:flex-row justify-center gap-3.5 md:gap-8">
            <button className="bg-[#EC901D] hover:bg-orange-600 text-sm md:text-base text-white px-8 md:px-[60px] py-4 rounded-full">
              <a href="/tentangkami">Pelajari Lebih Lanjut</a>
            </button>

            <button className="bg-[#EC901D] hover:bg-orange-600 text-sm md:text-base text-white px-8 md:px-[77px] py-4 rounded-full">
              <a href="/kontakkami">Hubungi Kami</a>
            </button>
          </div>

          <div className="hidden lg:flex bg-[#01B4BB] absolute bottom-[-70px] justify-center items-center py-6 px-6 rounded-3xl">
            <div className="flex flex-col gap-5 items-center border-r-1 border-white w-[228px]">
              <h1 className="text-[50px] font-semibold text-white">0 +</h1>
              <p className="text-sm text-white/70">Anak Penerima Manfaat</p>
            </div>
            <div className="flex flex-col gap-5 items-center border-r-1 border-white w-[228px]">
              <h1 className="text-[50px] font-semibold text-white">0 +</h1>
              <p className="text-sm text-white/70">Kolaborasi Mitra yang Terjalin</p>
            </div>
            <div className="flex flex-col gap-5 items-center  w-[228px]">
              <h1 className="text-[50px] font-semibold text-white">0 +</h1>
              <p className="text-sm text-white/70">Kota di seluruh Indonesia</p>
            </div>
          </div>
        </Hero>
      </Suspense>

      <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading Misi...</div>}>
        <Misi />
      </Suspense>
      <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading EducationCards...</div>}>
        <EducationCards />
      </Suspense>
      <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading ProgramUnggulan...</div>}>
        <ProgramUnggulan />
      </Suspense>
      <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading Testimoni...</div>}>
        <Testimoni />
      </Suspense>
      <Suspense fallback={<div className="p-10 text-center text-gray-500">Loading PartnerSection...</div>}>
        <PartnerSection />
      </Suspense>

      <Footer />
    </>
  );
}

export default HomePage;
