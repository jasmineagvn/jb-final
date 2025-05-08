const campaigns = [
  {
    image: "/icons/kampanye/kampanye1.png",
    tag: "Donasi Kampanye Tetap",
    title: "Pendidikan untuk Anak Hebat Sekolah Janji Baik",
    collected: 3000000,
    target: 5000000,
    description:
      "Setiap anak berhak atas masa depan yang dimulai dari ruang kelas. Lewat Janji untuk Pendidikan, kamu bisa bantu mereka tetap belajar, tumbuh, dan bermimpi—tanpa terhenti karena seragam yang sobek, buku yang tak ada, atau perut yang lapar. Donasimu, sekecil apa pun, adalah janji yang menguatkan langkah mereka setiap hari. Karena masa depan tak dibangun dari hal besar, tapi dari komitmen kecil yang setia.",
  },
  {
    image: "/icons/kampanye/kampanye2.png",
    tag: "Donasi Kampanye Terbatas/Sekilas",
    title: "Harapan yang Lulus Bersama Waktu – Wisuda di Sekolah Janji Baik",
    collected: 4000000,
    target: 5000000,
    description:
      "Setiap anak layak merayakan kelulusannya dengan bahagia. Lewat program ini, kita bantu hadirkan toga kecil, bingkisan sederhana, dan senyum besar di hari wisuda anak-anak Sekolah Janji Baik. Dukung mereka melangkah dengan bangga menuju masa depan.",
  },
  {
    image: "/icons/kampanye/kampanye3.png",
    tag: "Donasi Kampanye Terbatas/Sekilas",
    title: "Satu Hari untuk Negeri – Perayaan 17 Agustus di Sekolah Janji Baik",
    collected: 2000000,
    target: 5000000,
    description:
      "Dalam rangka menyambut Hari Kemerdekaan Republik Indonesia ke-79, Janji Baik mengadakan program spesial bertajuk Semarak Merdeka di Sekolah Janji Baik — sebuah inisiatif sederhana namun penuh makna untuk merayakan kemerdekaan bersama anak-anak di sekolah binaan kami..",
  },
  {
    image: "/icons/kampanye/kampanye3.png",
    tag: "Donasi Kampanye Tetap",
    title:
      "Bekal Belajar untuk Anak Negeri – Donasi Alat Tulis untuk Sekolah Janji Baik",
    collected: 500000,
    target: 5000000,
    description:
      "Dalam rangka menyambut tahun ajaran baru, Janji Baik mengadakan program berbagi alat tulis untuk anak-anak binaan kami di Sekolah Janji Baik. Kampanye ini bertajuk “Satu Hari untuk Masa Depan” karena kami percaya bahwa dengan dukungan sederhana berupa pensil, buku tulis, dan alat tulis lainnya, anak-anak dapat menulis cerita baru menuju masa depan yang lebih baik. Yuk, bantu kami lengkapi kebutuhan belajar mereka!",
  },
];

const CampaignList = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-[50px] font-bold text-center mb-4">
        Kampanye Janji Baik
      </h2>
      <p className="text-center text-[16px] text-gray-600 w-[844px] mx-auto mb-20">
        Janji Baik adalah gerakan untuk menciptakan masa depan yang lebih adil
        dan penuh harapan bagi anak-anak Indonesia. Melalui program pendidikan
        inklusif, ruang belajar yang aman dan suportif, serta perhatian pada
        kesehatan mental, kami mendampingi mereka untuk tumbuh dengan utuh.
        Kampanye ini juga mengajak masyarakat terlibat dalam membangun
        kesejahteraan sosial melalui aksi-aksi yang menumbuhkan empati,
        kolaborasi, dan kepedulian terhadap lingkungan. Bersama, kita bisa
        menjadikan setiap janji sebagai nyata—bagi mereka yang membutuhkan ruang
        untuk tumbuh dan bermimpi.
      </p>

      <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
        {campaigns.map((item, index) => (
          <div
            key={index}
            className="flex bg-white shadow-jb gap-14 w-full p-6 rounded-2xl"
          >
            <img src={item.image} alt="" />
            <div className="p-4 flex-1">
              <p className="text-sm text-[#01B4BB] font-medium mb-1">
                {item.tag}
              </p>
              <h2 className="text-[30px] font-bold mb-4">{item.title}</h2>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-4">
                <div
                  className="bg-cyan-600 h-2 rounded-full"
                  style={{
                    width: `${(item.collected / item.target) * 100}%`,
                  }}
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">
                Terkumpul <strong>Rp{item.collected.toLocaleString()}</strong> dari{" "}
                <strong>Rp{item.target.toLocaleString()}</strong>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-orange-400 hover:bg-orange-500 text-white w-[400px] h-[65px] px-6 py-2 rounded-full font-semibold transition">
          Buat Aksi Baik Kamu Yuk!
        </button>
      </div>
    </div>
  );
};

export default CampaignList;
