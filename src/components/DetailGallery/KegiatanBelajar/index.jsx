import Hero from "@/components/Hero";
import React from "react";
import Content from "./content";
import Footer from "@/components/Footer";

function KegiatanBelajar() {
  return (
    <>
      <Hero
        image="/icons/kegiatanbelajar/bg-belajar.png"
        title="Kegiatan Belajar Mengajar"
        description="Setiap gambar adalah cerita tentang semangat belajar dan kebersamaan. Inilah potret momen-momen berharga saat kita berbagi ilmu, ide, dan inspirasi. Mari terus tumbuh, belajar, dan bergerak bersama untuk masa depan yang lebih baik."
      />
      <Content />
      <Footer />
    </>
  );
}

export default KegiatanBelajar;
