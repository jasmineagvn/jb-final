import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function GraduationSiswa() {
  return (
    <div>
      <Hero
        title="Graduation Siswa Janji Baik"
        description="Setiap gambar menangkap langkah besar menuju masa depan. Inilah momen kelulusan yang penuh haru, bangga, dan harapan. Mari rayakan akhir yang indah dan awal dari perjalanan baru yang menjanjikan!"
        image="/icons/GraduationSiswa/bg-galeri.png"
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}

export default GraduationSiswa;
