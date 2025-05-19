import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import React, { Suspense } from "react";
import Spinner from "@/components/Spinner";

const Berita = React.lazy(() => import("./berita"))

function JbOnNews() {
  return (
    <>
      <Hero
        image="/icons/bg-jbonnews.png"
        title="JB On News "
        description="Temukan berbagai cerita inspiratif, program bermanfaat, dan kolaborasi penuh makna yang membawa dampak nyata bagi pendidikan dan kemanusiaan. Bersama, kita bisa menyalakan harapan, membangun masa depan, dan menciptakan perubahan untuk dunia yang lebih baik! "
      />
      <Suspense fallback={<Spinner />}>
        <Berita />
      </Suspense>
      <Footer />
    </>
  );
}

export default JbOnNews;
