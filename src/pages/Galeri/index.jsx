import React from "react";
import Pagination from "./pagination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

function Galeri() {
  return (
    <div>
      <Hero 
      image="/icons/bg-galeri.png"
      title="Galeri Kebaikan Janji Baik"
      description="Setiap gambar memiliki cerita. Inilah momen-momen penuh makna yang telah kami jalani bersama, mewujudkan janji untuk kebaikan. Mari terus berbagi dan menginspirasi!"
      />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Galeri;
