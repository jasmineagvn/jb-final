import React, { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner"; // Import spinner

// Lazy-load the components
const VisiMisi = lazy(() => import("./visimisi"));
const Legalitas = lazy(() => import("./legalitas"));
const Manfaat = lazy(() => import("./manfaat"));
const PrinsipSekolah = lazy(() => import("./prinsip"));
const Konseling = lazy(() => import("./konseling"));
const Muatan = lazy(() => import("./muatan"));
const Divisi = lazy(() => import("./divisi"));
const Sistem = lazy(() => import("./sistem"));
const Undang = lazy(() => import("./undang"));

function TentangKami() {
  return (
    <>
      <Hero
        image="/icons/bg-tentangkami.png"
        title="Tentang Janji Baik"
        description="Tempat berkesempatan baik untuk menghubungkan kepedulian dengan aksi dalam  membangun pendidikan berkualitas. Janji Baik didirikan pada tahun 2020 atas inisiatif sekelompok anak muda di Tangerang Selatan yang peduli terhadap dunia pendidikan. "
      />
      <Suspense fallback={<Spinner />}>
        <VisiMisi />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Legalitas />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Manfaat />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <PrinsipSekolah />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Konseling />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Muatan />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Divisi />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Sistem />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Undang />
      </Suspense>
      <Footer />
    </>
  );
}

export default TentangKami;
