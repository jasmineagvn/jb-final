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
    profile: "/icons/testi1.png",
  },
  {
    nama: "David Elnes",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi5.png",
  },
  {
    nama: "Kimberly Mastrangelo",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi6.png",
  },
  {
    nama: "Katie Sims",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi7.png",
  },
  {
    nama: "James Hole",
    role: "Relawan Janji Baik",
    desc: "“Bersama Janji Baik, saya belajar bahwa membantu sesama bisa dimulai dari hal kecil. Senyuman anak-anak saat belajar adalah hadiah terbesar!”",
    profile: "/icons/testi1.png",
  },
];

const Testimoni = () => {
  return (
    <div className="py-12 px-6 lg:px-16 mt-44 md:mt-28">
      <div className="text-center mb-12">
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testi.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#3C3F41] p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow animate-slide-horizontal"
          >
            <div className="flex items-start space-x-4">
              <img
                src={item.profile}
                alt={item.nama}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col w-full max-w-[500px]">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6">
                  {item.nama}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.role}</p>
                <p className="text-gray-700 dark:text-white  mb-4 mt-4">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
