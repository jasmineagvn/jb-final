import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";

const Pagination = React.lazy(() => import("./pagination"));

function Galeri() {
  return (
    <div>
      <Hero
        image="/icons/bg-galeri.png"
        title="Galeri Kebaikan Janji Baik"
        description="Setiap gambar memiliki cerita. Inilah momen-momen penuh makna yang telah kami jalani bersama, mewujudkan janji untuk kebaikan. Mari terus berbagi dan menginspirasi!"
      />
      <Suspense fallback={<Spinner />}>
        <Pagination />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Galeri;
