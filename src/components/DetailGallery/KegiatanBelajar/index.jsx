import Hero from "@/components/Hero";
import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function KegiatanBelajar() {
  return (
    <>
      <Hero
        image="/icons/kegiatanbelajar/bg-belajar.png"
        title="Kegiatan Belajar Mengajar"
        description="Setiap gambar adalah cerita tentang semangat belajar dan kebersamaan. Inilah potret momen-momen berharga saat kita berbagi ilmu, ide, dan inspirasi. Mari terus tumbuh, belajar, dan bergerak bersama untuk masa depan yang lebih baik."
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </>
  );
}

export default KegiatanBelajar;
