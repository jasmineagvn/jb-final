import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import Form from "./form";
import Maps from "./maps";

function KontakKami() {
  return (
    <>
      <Hero
        image="/icons/bg-kontakinformasi.png"
        title="Kontak Informasi "
        description="Janji Baik selalu siap merespons, baik untuk pertanyaan, masukan, atau sekadar sapaan. "
      />
      <Form />
      <Maps />
      <Footer/>
    </>
  );
}

export default KontakKami;