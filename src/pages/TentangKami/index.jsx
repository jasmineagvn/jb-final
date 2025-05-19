import Hero from "@/components/Hero";
import VisiMisi from "./visimisi";
import Legalitas from "./legalitas";
import Manfaat from "./manfaat";
import PrinsipSekolah from "./prinsip";
import Footer from "@/components/Footer";
import Konseling from "./konseling";
import Muatan from "./muatan";
import Divisi from "./divisi";
import Sistem from "./sistem";
import Undang from "./udang";

function TentangKami() {
  return (
    <>
      <Hero
        image="/icons/bg-tentangkami.png"
        title="Tentang Janji Baik"
        description="Tempat berkesempatan baik untuk menghubungkan kepedulian dengan aksi dalam  membangun pendidikan berkualitas. Janji Baik didirikan pada tahun 2020 atas inisiatif sekelompok anak muda di Tangerang Selatan yang peduli terhadap dunia pendidikan. "
      />
      <VisiMisi />
      <Legalitas />
      <Manfaat />
      <PrinsipSekolah />
      <Konseling />
      <Muatan />
      <Divisi />
      <Sistem />
      <Undang />
      <Footer />
    </>
  );
}

export default TentangKami;
