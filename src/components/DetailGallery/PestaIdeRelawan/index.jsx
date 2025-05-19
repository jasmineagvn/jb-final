import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));

function PestaIdeRelawan() {
  return (
    <div>
      <Hero
        title="Pesta Ide Relawan"
        description="Setiap gambar menyimpan kisah semangat dan kolaborasi. Inilah momen-momen seru dan penuh ide yang telah kami rayakan bersama. Mari terus menyalakan inspirasi dan bergerak bersama untuk perubahan"
        image="/icons/bg-galleri2.png"
      />
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}

export default PestaIdeRelawan;
