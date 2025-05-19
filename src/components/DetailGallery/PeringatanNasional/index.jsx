import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function PeringatanHariNasional() {
  return (
    <>
      <Hero
        title="Peringatan Hari Nasional"
        image="/icons/PeringatanNasional/bg-galeri.png"
        description="Setiap gambar mengabadikan tekad kami untuk terus menepati Janji Baik bagi bangsa. Dalam semangat Hari Nasional, kami merayakan kebersamaan, mengenang perjuangan, dan melangkah maju demi Indonesia yang lebih baik."
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </>
  );
}

export default PeringatanHariNasional;
