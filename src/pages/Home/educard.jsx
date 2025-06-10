import { Link } from "react-router-dom";

const Card = ({ icon, title, description, button, link }) => (
  <div className="rounded-xl p-6 dark:bg-[#3C3F41] shadow-2xl gap-5 flex flex-col items-center hover:bg-[rgba(69,179,157,0.2)]">
    <div className="text-xl text-cyan-600 mb-4">{icon}</div>
    <h2 className="text-xl dark:text-white font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 text-center">
      {description}
    </p>
    {link ? (
      <Link 
        to={link}
        className="bg-[#EC901D] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition cursor-pointer inline-block text-center"
      >
        {button}
      </Link>
    ) : (
      <button className="bg-[#EC901D] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition cursor-pointer">
        {button}
      </button>
    )}
  </div>
);

const EducationCards = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-[90px] lg:mt-[150px]">
      <Card
        icon={<img src="/icons/siswa.png" width={80} height={80}></img>}
        title="Menjadi Siswa"
        description="Dapatkan pendidikan berkualitas untuk masa depan yang lebih cerah. Bergabunglah bersama kami dan nikmati fasilitas belajar lengkap,program pengembangan siswa, serta lingkungan belajar yang mendukung"
        button="Daftar Sebagai Siswa"
        link="/syaratdaftarsiswa"
      />
      <Card
        icon={<img src="/icons/relawan.png" width={80} height={80}></img>}
        title="Menjadi Relawan"
        description="Bergabunglah sebagai pengajar, mentor, atau tenaga relawan untuk membantu anak-anak belajar dan berkembang. Anda bisa berbagi ilmu, pengalaman, atau keterampilan dengan mereka."
        button="Daftar Sebagai Relawan"
        link="/daftarrelawan"
      />
      <Card
        icon={<img src="/icons/donation.png" width={80} height={80}></img>}
        title="Berdonasi"
        description="Dukung pendidikan anak-anak dengan memberikan donasi. Setiap kontribusi yang Anda berikan akan digunakan untuk biaya operasional sekolah, perlengkapan belajar, dan program pengembangan siswa."
        button="Ingin berdonasi?"
      />
      <Card
        icon={<img src="/icons/kolaborasi.png" width={80} height={80}></img>}
        title="Berkolaborasi"
        description="Kami membuka peluang kerja sama dengan komunitas, perusahaan, dan lembaga lainnya untuk menciptakan program pendidikan yang lebih berdampak. Mari bersama membangun masa depan yang lebih baik!"
        button="Mau Berkolaborasi?"
      />
    </div>
  );
};

export default EducationCards;