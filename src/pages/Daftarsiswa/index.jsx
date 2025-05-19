import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import React, { Suspense } from "react";
import Spinner from "@/components/Spinner";

const Syarat = React.lazy(() => import("./syarat"));

function DaftarSiswa() {
  return (
    <>
      <Hero
        image="/icons/bg-daftarsiswa.png"
        title="Menjadi Siswa Janji Baik "
        description="Dapatkan pendidikan berkualitas untuk masa depan yang lebih cerah. Bergabunglah bersama kami dan nikmati fasilitas belajar lengkap, program pengembangan siswa, serta lingkungan belajar yang mendukung. "
      />
      <Suspense fallback={<Spinner />}>
        <Syarat />
      </Suspense>
      <Footer />
    </>
  );
}

export default DaftarSiswa;
