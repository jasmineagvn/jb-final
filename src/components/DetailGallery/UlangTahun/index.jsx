import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function UlangTahun() {
  return (
    <>
      <Hero
        image="/icons/ulangtahun/bg-galeri.png"
        title="Ulang Tahun Janji Baik"
        description="Setiap gambar adalah jejak perjalanan penuh makna. Inilah momen-momen hangat ulang tahun Janji Baik yang dirayakan dengan syukur dan harapan. Mari terus melangkah bersama, berbagi kebaikan tanpa henti!"
      />
      <Content />
      <Footer />
    </>
  );
}

export default UlangTahun;
