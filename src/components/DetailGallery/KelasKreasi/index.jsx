import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function KelasKreasi() {
  return (
    <>
      <Hero
        title="Kelas Kreasi"
        description="Setiap gambar adalah bukti bahwa imajinasi bisa diwujudkan. Inilah keseruan di kelas kreasi—tempat tawa, warna, dan ide-ide luar biasa bertemu. Mari terus berkarya dan tumbuhkan kreativitas bersama!"
        image="/icons/KelasKreasi/bg-galleri.png"
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </>
  );
}

export default KelasKreasi;
