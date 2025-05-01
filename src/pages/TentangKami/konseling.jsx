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

export default function Konseling() {
  return (
    <section className="relative flex flex-col gap-5 md:flex-row mt-16 justify-between items-center mb-32 ml-0 md:ml-20 px-5">
      <div className="flex flex-col gap-4 w-full md:w-[565px] ">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#01B4BB] font-semibold">
            Program Pengembangan
          </span>
          <h1 className="text-2xl font-bold">Layanan Konseling Janji Baik</h1>
          <p className="text-[#72717B] mt-4">
            Pelayanan konseling terpadu yang dilakukan oleh konselor untuk
            meningkatkan aspek akademis maupun aspek psikologis peserta didik
            maupun orang tua-nya masing-masing.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold mt-6">
            Kegiatan Rutin Pendampingan
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <img src="/icons/checklist.svg" alt="" className="w-5 h-5" />
              <p className="text-base text-[#EC901D]">
                Parenting untuk Orang Tua Peserta Didik
              </p>
            </div>
            <h1 className="text-base text-[#72717B]">
              {" "}
              Kegiatan menghadirkan Narasumber dalam memberikan pelatihan,
              bimbingan dan konsultasi bagi para Orang Tua.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <img src="/icons/checklist.svg" alt="" className="w-5 h-5" />
              <p className="text-base text-[#EC901D]">
                Kunjungan ke Rumah (Home Visit)
              </p>
            </div>
            <h1 className="text-base text-[#72717B]">
              {" "}
              Kegiatan yang dilakukan pihak sekolah agar mengetahui latar
              belakang peserta didik dan meningkatkan pembelajaran campuran
              (Blended Learning).
            </h1>
          </div>
        </div>
      </div>

      <div className="md:relative">
        <img
          src="/icons/bg.png"
          alt=""
          className="w-[600px] h-[371px] hidden md:block"
        />
        <div className="md:absolute flex flex-wrap gap-5 md:gap-[52px] md:-top-12 md:left-12">
          <div className="bg-white dark:bg-[#3C3F41] shadow-2xl w-full md:w-[200px] h-[200px] flex flex-col gap-2 justify-center items-center rounded-lg">
            <img src="/icons/program1.png" alt="" />
            <h1 className="text-center text-base">Proyek Sosial</h1>
          </div>
          <div className="bg-white dark:bg-[#3C3F41] shadow-2xl w-full md:w-[200px] h-[200px] flex flex-col gap-2 justify-center items-center rounded-lg">
            <img src="/icons/program1.png" alt="" />
            <h1 className="text-center text-base">
              Peringatan Hari Besar Nasional
            </h1>
          </div>
          <div className="bg-white dark:bg-[#3C3F41] shadow-2xl w-full md:w-[200px] h-[200px] flex flex-col gap-2 justify-center items-center rounded-lg">
            <img src="/icons/program1.png" alt="" />
            <h1 className="text-center text-base">
              Peringatan Hari Besar Keagamaan
            </h1>
          </div>
          <div className="bg-white dark:bg-[#3C3F41] shadow-2xl w-full md:w-[200px] h-[200px] flex flex-col gap-2 justify-center items-center rounded-lg">
            <img src="/icons/program1.png" alt="" />
            <h1>Study Tour</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
