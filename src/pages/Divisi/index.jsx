import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import Content from "./content";
import Daftar from "./daftar";

function Divisi() {
  return (
    <>
      <Hero
        image="/icons/bg-divisi.png"
        title="Divisi Janji Baik"
        description=" Di Janji Baik, setiap divisi memiliki peran penting dalam mewujudkan misi kami. Dengan kolaborasi tim yang solid, kami berupaya menghadirkan program terbaik, memastikan setiap inisiatif berjalan optimal, dan menciptakan dampak positif bagi mereka yang membutuhkan."
      >
        <button className="bg-[#EC901D] text-sm md:text-base text-white px-8 md:px-[60px] py-4 rounded-full">
          Daftar Sebagai Relawan
        </button>
      </Hero>
      <Content />
      <Daftar />
      <Footer />
    </>
  );
}

export default Divisi;
