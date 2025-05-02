const testi = [
  {
    nama: "Jasmine Indhira Aghivani",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi1.png",
  },
  {
    nama: "Danisa Arwanti",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi2.png",
  },
  {
    nama: "Miftahul Rizkika Pasha",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi3.png",
  },
  {
    nama: "Patricia Sanders",
    role: "Murid Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi4.png",
  },
  {
    nama: "Joshua Jones",
    role: "Alumni Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi5.png",
  },
  {
    nama: "David Elnes",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi6.png",
  },
  {
    nama: "Kimberly Mastrangelo",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi7.png",
  },
];

const Testimoni = () => {
  return (
    <div className="mt-44 md:mt-28">
      <div className="text-center mb-12 px-6">
        <p className="text-[#01B4BB] font-semibold">
          Testimoni & Kisah Inspiratif
        </p>
        <h2 className="text-3xl font-semibold mt-2 mb-4">
          Cerita Perubahan dari Mereka yang Telah Terbantu
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Setiap anak yang belajar di Sekolah Janji Baik memiliki cerita
          perjuangan yang unik. Dari keterbatasan hingga menemukan harapan baru,
          mereka membuktikan bahwa pendidikan bisa mengubah masa depan.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-10 bg-gray-100">
        {testi.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white w-[503px] px-6 py-7 rounded-3xl"
          >
            <img src={item.profile} alt={item.nama} className="w-14 h-14" />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{item.nama}</h1>
              <span className="text-sm text-gray-600">{item.role}</span>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
