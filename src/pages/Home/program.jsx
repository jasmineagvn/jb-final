import Button from "../../components/Button";

const programCard = [
  {
    icon: "/icons/education.png",
    title: "Sekolah Gratis Berbasis Teknologi",
    description:
      "Bagi anak-anak yang mengalami keterbatasan akses pendidikan formal, Sekolah Janji Baik menyediakan program pendidikan gratis jenjang setara SD, SMP, SMA melalui pendidikan non formal kesetaraan.",
  },
  {
    icon: "/icons/education.png",
    title: "Lingkungan",
    description:
      "Di era digital, keterampilan teknologi sangat penting. Program ini membekali siswa dengan pemahaman teknologi dasar, penggunaan internet yang produktif",
  },
  {
    icon: "/icons/education.png",
    title: "Bimbingan & Kesehatan Mental",
    description:
      "Kami menyediakan layanan bimbingan konseling untuk mendukung perkembangan akademik dan psikologis siswa",
  },
  {
    icon: "/icons/education.png",
    title: "Kesejahteraan Sosial",
    description:
      "Kami percaya bahwa pendidikan bukan hanya tanggung jawab sekolah, tetapi juga seluruh elemen masyarakat.",
  },
];

const ProgramUnggulan = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-center mt-24 md:mt-44">
      <div className="md:relative w-full order-2 md:order-1 h-screen md:h-full mb-28 md:mb-0">
        <img
          src="/icons/bg.png"
          alt="Background"
          className="w-[620px] hidden md:flex"
        />

        <div className="md:absolute flex flex-wrap justify-center w-full md:w-[800px] h-[500px] top-10 md:-top-10 gap-7">
          {programCard.map((program, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-[#3C3F41] shadow-lg flex flex-col rounded-xl mx-5 md:mx-0 px-4 justify-center gap-2 w-[341px] h-[230px]"
            >
              <img src={program.icon} alt="" width={40} height={40} />
              <h3 className="text-xl text-black dark:text-white font-bold mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full px-4 md:w-[550px] mr-0 md:mr-16 order-1 md:order-2">
        <span className="text-sm text-[#01B4BB] font-semibold">
          Program Unggulan
        </span>
        <h1 className="text-[24px] font-semibold tracking-[-0.7px] leading-snug">
          Membuka Akses, Meningkatkan Kesempatan, Mewujudkan Janji Baik
        </h1>
        <p className="text-sm text-[#72717B] dark:text-gray-300">
          Janji Baik lahir dari kepedulian dan keyakinan bahwa setiap anak
          berhak mendapatkan pendidikan yang layak. Kami hadir untuk memberikan
          akses belajar bagi anak-anak yang kurang beruntung, membuka peluang
          yang lebih luas, dan memastikan mereka memiliki masa depan yang lebih
          baik.
        </p>
        <Button><a href="/program">Lihat Program di Janji Baik</a></Button>
      </div>
    </section>
  );
};

export default ProgramUnggulan;
