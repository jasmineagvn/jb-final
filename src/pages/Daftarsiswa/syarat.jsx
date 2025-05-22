import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";

const SyaratSiswa = React.lazy(() => import("../../components/syarat/index"));

function SyaratPage() {
  return (
    <div>
      <Hero
        image="/icons/bg-daftarsiswa.png"
        title="Menjadi Siswa Janji Baik "
        description="Dapatkan pendidikan berkualitas untuk masa depan yang lebih cerah. Bergabunglah bersama kami dan nikmati fasilitas belajar lengkap, program pengembangan siswa, serta lingkungan belajar yang mendukung. "
      />
      <Suspense fallback={<Spinner />}>
        <SyaratSiswa />
      </Suspense>
    </div>
  );
}

export default SyaratPage;
