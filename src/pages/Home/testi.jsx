const testi = [
  {
    nama: "Pandu Pangestu",
    role: "Relawan Janji Baik",
    desc: "“Bagiku Janji Baik kini menjadi satu-satunya tempat untuk mempertanggungjawabkan keilmuan dan tempat memanen banyak kebaikan yang InsyaAllah kelak akan menjadi pemberat amal di akhirat💙”",
    profile: "/icons/testi/PanduPangestu.png",
  },
  {
    nama: "Syaiful Bahri Ibnu Abdillah",
    role: "Relawan Janji Baik",
    desc: "“Saya merasa sangat beruntung bisa menjadi bagian dari keluarga Janji Baik. Selain mendapatkan pengalaman berharga, ini juga menjadi bagian dari proses belajar saya untuk menjadi pribadi yang dapat bermanfaat bagi orang lain. Tidak ada hal lain yang saya harapkan selain melihat senyum bahagia para adik-adik siswa Janji Baik. Sukses terus untuk Janji Baik💙💙”",
    profile: "/icons/testi/SyaifulBahri.png",
  },
  {
    nama: "Putri Amalia Soleha",
    role: "Relawan Janji Baik",
    desc: "“Pertama kali kenal Janji Baik, aku langsung senang karena merasa ngajar di sini punya rasa yang beda. Aku bisa menyalurkan hobi belajar sejarah, meski aku anak MIPA. Di sini aku nggak cuma mengajar, tapi juga ikut belajar berkat anak-anak yang penuh semangat. Pesanku, semoga kalian makin disiplin belajarnya, dan semoga kebaikan selalu menyertai kita semua. Aamiin 🫶”",
    profile: "/icons/testi/PutriAmalia.png",
  },
  {
    nama: "Alan Nuary",
    role: "Siswa Janji Baik",
    desc: "“Cerita selama di Janji Baik seruu banyak banget kalau ikut acara offline nya banyak aktifitas kaya games, tanya jawab, bahkan tour dll, sampe ada satu hari pulang sampe malem wkwkw dan kesan nya si kagum sama kakak-kakak nya support banget kalau ada pelajaran yang sulit dimengerti kakak nya fast respon banget, pokok nya kalian keren sekali. Terima kasih Janji Baik💙”",
    profile: "/icons/testi/AlanNuary.png",
  },
  {
    nama: "Fergie Virginia",
    role: "Relawan Janji Baik",
    desc: "“Menjadi bagian dari sekolah Janji Baik adalah pengalaman yang sangat berarti bagi saya. Senangnya melihat anak-anak yang bisa sekolah, di tengah keterbatasan mereka. Janji Baik bukan hanya menjadi tempat belajar bagi mereka, tetapi juga tempat saya belajar tentang arti hidup, harapan, dan ketulusan. Janji Baik, tempat berkesempatan baik😊👌”",
    profile: "/icons/testi/FergieVirginia.png",
  },
  {
    nama: "Siti Aisyah",
    role: "Siswa Janji Baik",
    desc: "“Aku suka sekolah di Janji Baik. Kalau aku nggak sekolah di Janji Baik, gabakal bisa punya temen-temen baik kayak mereka, terus kakak-kakak yang baik yang selalu ngajarin kita yang masih belum ngerti banyak.”",
    profile: "/icons/testi/SitiAisyah.png",
  },
  {
    nama: "Sawinah",
    role: "Siswa Janji Baik",
    desc: "“Belajar di Janji Baik benar-benar beda—lebih santai dan fleksibel karena online, tapi tetap seru dengan kegiatan bulanan. Favoritku adalah Kelas Kreasi, karena bisa ketemu langsung, main game, dan dengerin sharing dari kampus. Aku jadi lebih semangat belajar dan punya gambaran jelas soal masa depan. Terima kasih Janji Baik, sudah jadi rumah belajar yang menyenangkan dan bermakna! 💙✨”",
    profile: "/icons/testi/Sawinah.png",
  },
  {
    nama: "Patricia Putri Kissya Rintyaningtyas",
    role: "Relawan Janji Baik",
    desc: "“Menjadi tutor kelas 1 di Sekolah Janji Baik adalah pengalaman luar biasa. Melihat anak-anak tumbuh dalam akademik, kemandirian, dan percaya diri sangat membahagiakan. Kurikulumnya menyenangkan dan bermakna, ditambah kegiatan seperti karyawisata dan nonton bersama yang membuat suasana belajar jadi positif. Saya bangga bisa jadi bagian dari awal perjalanan mereka.”",
    profile: "/icons/testi/PatriciaPutri.png",
  },
  {
    nama: "Detta Pristianti",
    role: "Relawan Janji Baik",
    desc: "“Seneng banget selama di Janji Baik, temen-temennya sangat helpful dan programnya jelas memberikan manfaat ke adik-adik. semoga kedepannya semakin berkembang menjadi lebih baik yaaaaa luv🥰”",
    profile: "/icons/testi/DettaPristianti.png",
  },
];

const Testimoni = () => {
  return (
    <div className="mt-[190px] lg:mt-28">
      <div className="text-center mb-12 px-6">
        <p className="text-[#01B4BB] text-sm font-semibold">
          Testimoni & Kisah Inspiratif
        </p>
        <h2 className="text-2xl lg:text-3xl font-semibold mt-2 mb-4">
          Cerita Perubahan dari Mereka yang Telah Terbantu
        </h2>
        <p className="text-gray-600 text-sm lg:text-base dark:text-gray-400 max-w-2xl mx-auto">
          Setiap anak yang belajar di Sekolah Janji Baik memiliki cerita
          perjuangan yang unik. Dari keterbatasan hingga menemukan harapan baru,
          mereka membuktikan bahwa pendidikan bisa mengubah masa depan.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-5 md:px-0 py-10 bg-gray-100">
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
