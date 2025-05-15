import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function PKM() {
  return (
    <div>
      <Hero
        title="Pengabdian Kepada Masyarakat"
        description="Setiap gambar merekam kolaborasi penuh makna antara Janji Baik dan program Pengabdian kepada Masyarakat di berbagai kampus. Bersama, kami menghadirkan aksi nyata, belajar dari masyarakat, dan menepati janji untuk terus membawa kebaikan yang berdampak."
        image="/icons/pkmgaleri/bg-pkm.png"
      />
      <Content />
      <Footer />
    </div>
  );
}

export default PKM;