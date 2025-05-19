import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function PKM() {
  return (
    <div>
      <Hero
        title="Pengabdian Kepada Masyarakat"
        description="Setiap gambar merekam kolaborasi penuh makna antara Janji Baik dan program Pengabdian kepada Masyarakat di berbagai kampus. Bersama, kami menghadirkan aksi nyata, belajar dari masyarakat, dan menepati janji untuk terus membawa kebaikan yang berdampak."
        image="/icons/pkmgaleri/bg-pkm.png"
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}

export default PKM;
