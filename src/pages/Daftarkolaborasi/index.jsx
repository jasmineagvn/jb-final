import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import React, { Suspense } from "react";
import Spinner from "@/components/Spinner";

const Card = React.lazy(() => import("./card"));
const Form = React.lazy(() => import("./form"));

function DaftarKolaborasi() {
  return (
    <>
      <Hero
        image="/icons/bg-berkolaborasi.png"
        title="Ayo Berkolaborasi!"
        description="Jika Anda tertarik untuk berkolaborasi, Janji Baik siap menyambut ide-ide baru dan kesempatan untuk bekerja bersama. Kami percaya bahwa kolaborasi yang erat akan membawa dampak positif yang lebih besar. Hubungi kami untuk memulai kerja sama yang bermakna dan mewujudkan perubahan bersama. "
      />
      <Suspense fallback={<Spinner />}>
        <Card />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Form />
      </Suspense>
      <Footer />
    </>
  );
}

export default DaftarKolaborasi;
