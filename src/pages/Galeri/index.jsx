import React from "react";
import Pagination from "./pagination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

function Galeri() {
  return (
    <div>
      <Hero 
      image="/icons/bg-galleri1.png"
      title="Galeri Kebaikan"
      description="Kami telah mengumpulkan berbagai kebaikan dari para relawan dan pengunjung kami. Dari kebaikan kecil hingga kebaikan besar, kami ingin menggambarkan keberadaan kita di dunia."
      />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Galeri;
