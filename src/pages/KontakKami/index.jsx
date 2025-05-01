import Footer from "@/components/Footer";
import Hero from "../../components/Hero";

function KontakKami() {
  return (
    <>
      <Hero
        image="/icons/bg-kontakinformasi.png"
        title="Kontak Informasi "
        showLearnMoreButton={false}
        showContactUsButton={false}
        description="Janji Baik selalu siap merespons, baik untuk pertanyaan, masukan, atau sekadar sapaan. "
      />
      <Footer/>
    </>
  );
}

export default KontakKami;