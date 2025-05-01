import Hero from "../../components/Hero";
import Misi from "./misi";
import EducationCards from "./educard";
import ProgramUnggulan from "./program";
import Testimoni from "./testi";
import PartnerSection from "./kolaborasi";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <>
      <Hero
        image="/background.png"
        title="Sekolah Inovatif Untuk Masa Depan Tanpa Hambatan"
        description="Kami percaya bahwa setiap anak memilihi hak untuk mendapatkan akses pendidikan yang berkualitas dan memiliki potensi besar untuk sukses.Sekolah teknologi janji baik hadir untuk mewujudkan impian tanpa hambatan biaya."
      >
        <div className="flex flex-col md:flex-row justify-center gap-3.5 md:gap-8">
          <button className="bg-[#EC901D] text-sm mgitd:text-base text-white px-8 md:px-[60px] py-4 rounded-full">
            <a href="/tentangkami">Pelajari Lebih Lanjut</a>
          </button>

          <button className="bg-[#EC901D] text-sm md:text-base text-white px-8 md:px-[77px] py-4 rounded-full">
            <a href="/kontakkami">Hubungi Kami</a>
          </button>
        </div>
      </Hero>
      <Misi />
      <EducationCards />
      <ProgramUnggulan />
      <Testimoni />
      <PartnerSection />
      <Footer />
    </>
  );
}

export default HomePage;
