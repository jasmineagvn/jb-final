import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function UlangTahun() {
  return (
    <>
      <Hero
        image="/icons/ulangtahun/bg-galeri.png"
        title="Ulang Tahun Janji Baik"
        description="Setiap gambar adalah jejak perjalanan penuh makna. Inilah momen-momen hangat ulang tahun Janji Baik yang dirayakan dengan syukur dan harapan. Mari terus melangkah bersama, berbagi kebaikan tanpa henti!"
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </>
  );
}

export default UlangTahun;
