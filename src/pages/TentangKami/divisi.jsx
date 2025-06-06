const Divisi = () => {
  const program = [
    {
      title: "Pendidikan Non-Formal & Kesetaraan",
      description:
        "Bagi anak-anak yang mengalami keterbatasan akses pendidikan formal, Sekolah Janji Baik menyediakan program pendidikan kesetaraan.",
      icon: "./public/icons/education.png",
    },
    {
      title: "Lingkungan",
      description:
        "Di era digital, keterampilan teknologi sangat penting. Program ini membekali siswa dengan pemahaman teknologi dasar, penggunaan internet yang produktif",
      icon: "./public/icons/lingkungan.png",
    },
    {
      title: "Bimbingan & Kesehatan Mental",
      description:
        "Kami menyediakan layanan bimbingan konseling untuk mendukung perkembangan akademik dan psikologis siswa",
      icon: "./public/icons/bimkesmen.png",
    },
    {
      title: "Kesejahteraan Sosial",
      description:
        "Kami percaya bahwa pendidikan bukan hanya tanggung jawab sekolah, tetapi juga seluruh elemen masyarakat.",
      icon: "./public/icons/kesos.png",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 items-center mt-24 md:mt-44 mb-40">
      <div className="md:relative w-full order-2 md:order-1 h-screen md:h-full mb-28 md:mb-0">
        <img
          src="/icons/bg.png"
          alt="Background"
          className="w-[620px] hidden md:flex"
        />

        <div className="md:absolute flex flex-wrap justify-center w-full md:w-[800px] h-[500px] top-10 md:-top-10 gap-7">
          {program.map((program, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-[#3C3F41] shadow-lg flex flex-col rounded-xl mx-5 md:mx-0 px-4 justify-center gap-2 w-[341px] h-[230px]"
            >
              <img src={program.icon} alt="" width={40} height={40} />
              <h3 className="text-xl text-black dark:text-white font-bold mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full px-4 md:w-[550px] mr-0 md:mr-16 order-1 md:order-2">
        <span className="text-sm text-[#01B4BB] font-semibold">
          Divisi Janji Baik
        </span>
        <h1 className="text-[24px] font-semibold tracking-[-0.7px] leading-snug">
          Membangun Kebaikan, Bersama dalam Setiap Divisi
        </h1>
        <p className="text-sm text-[#72717B]">
          Di Janji Baik, setiap divisi memiliki peran penting dalam mewujudkan
          misi kami. Dengan kolaborasi tim yang solid, kami berupaya
          menghadirkan program terbaik, memastikan setiap inisiatif berjalan
          optimal, dan menciptakan dampak positif bagi mereka yang membutuhkan.
        </p>
        <button className="bg-[#EC901D] hover:bg-orange-600 text-sm md:text-base text-white px-8 md:px-[77px] py-4 rounded-full cursor-pointer">
            <a href="/divisikami">Pelajari lebih lanjut</a>
        </button>
      </div>
    </section>
  );
};

export default Divisi;
