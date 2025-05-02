import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function PestaIdeRelawan() {
  return (
    <div>
      <Hero
        title="Pesta Ide Relawan"
        description="Setiap gambar menyimpan kisah semangat dan kolaborasi. Inilah momen-momen seru dan penuh ide yang telah kami rayakan bersama. Mari terus menyalakan inspirasi dan bergerak bersama untuk perubahan"
        image="/icons/bg-galleri2.png"
      />
      <Content />
      <Footer />
    </div>
  );
}

export default PestaIdeRelawan;
