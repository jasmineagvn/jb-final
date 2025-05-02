import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function KelasKreasi() {
  return (
    <>
      <Hero
        title="Kelas Kreasi"
        description="Setiap gambar adalah bukti bahwa imajinasi bisa diwujudkan. Inilah keseruan di kelas kreasi—tempat tawa, warna, dan ide-ide luar biasa bertemu. Mari terus berkarya dan tumbuhkan kreativitas bersama!"
        image="/icons/KelasKreasi/bg-galleri.png"
      />
      <Content />
      <Footer />
    </>
  );
}

export default KelasKreasi;
