import React from "react";
import Hero from "@/components/Hero";
import Content from "./content";
import Footer from "@/components/Footer";

function GraduationSiswa() {
  return (
    <div>
      <Hero
        title="Graduation Siswa Janji Baik"
        description="Setiap gambar menangkap langkah besar menuju masa depan. Inilah momen kelulusan yang penuh haru, bangga, dan harapan. Mari rayakan akhir yang indah dan awal dari perjalanan baru yang menjanjikan!"
        image="/icons/GraduationSiswa/bg-galeri.png"
      />
      <Content />
      <Footer />
    </div>
  );
}

export default GraduationSiswa;
