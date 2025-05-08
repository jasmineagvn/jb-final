import Footer from "@/components/Footer";
import Hero from "../../components/Hero";
import Syarat from "./syarat";

function DaftarSiswa() {
  return (
    <>
      <Hero
        image="/icons/bg-daftarsiswa.png"
        title="Menjadi Siswa Janji Baik "
        description="Dapatkan pendidikan berkualitas untuk masa depan yang lebih cerah. Bergabunglah bersama kami dan nikmati fasilitas belajar lengkap, program pengembangan siswa, serta lingkungan belajar yang mendukung. "
      />
      <Syarat />
      <Footer/>
    </>
  );
}

export default DaftarSiswa;