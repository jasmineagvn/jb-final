import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function PeringatanHariNasional() {
  return (
    <>
      <Hero
        title="Peringatan Hari Nasional"
        image="/icons/PeringatanNasional/bg-galeri.png"
        description="Setiap gambar mengabadikan tekad kami untuk terus menepati Janji Baik bagi bangsa. Dalam semangat Hari Nasional, kami merayakan kebersamaan, mengenang perjuangan, dan melangkah maju demi Indonesia yang lebih baik."
      />
      <Content />
      <Footer />
    </>
  );
}

export default PeringatanHariNasional;
