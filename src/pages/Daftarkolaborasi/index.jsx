import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import Card from "./card";
import Form from "./form";

function DaftarKolaborasi() {
  return (
    <>
      <Hero
        image="/icons/bg-berkolaborasi.png"
        title="Ayo Berkolaborasi!"
        showLearnMoreButton={false}
        showContactUsButton={false}
        description="Jika Anda tertarik untuk berkolaborasi, Janji Baik siap menyambut ide-ide baru dan kesempatan untuk bekerja bersama. Kami percaya bahwa kolaborasi yang erat akan membawa dampak positif yang lebih besar. Hubungi kami untuk memulai kerja sama yang bermakna dan mewujudkan perubahan bersama. "
      />
      <Card />
      <Form />
      <Footer/>
    </>
  );
}

export default DaftarKolaborasi;