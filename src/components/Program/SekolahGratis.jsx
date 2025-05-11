const cardSekolahGratis = [
  {
    img: "/icons/program/p3.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Kegiatan Belajar Mengajar",
    desc: "Kegiatan Belajar Mengajar merupakan program dari Janji Baik yang mendukung pengembangan ilmu, karakter, dan keterampilan siswa melalui sesi online yang interaktif. Kegiatan ini dilaksanakan secara rutin dan disesuaikan dengan jenjang kelas masing-masing peserta. Setiap sesi dirancang untuk memberikan pengalaman belajar yang menyenangkan, sekaligus memantau perkembangan siswa secara berkala.",
  },
  {
    img: "/icons/program/p1.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Kelas Kreasi Janji Baik",
    desc: "Kelas Kreasi adalah program non-akademik dari Janji Baik yang mendukung pengembangan kreativitas, karakter, dan keterampilan hidup siswa melalui kegiatan ekstrakurikuler. Program ini diadakan sebulan sekali setiap hari Minggu di SDN Perigi 02, Tangerang Selatan, dan terbuka untuk seluruh siswa aktif. Kegiatan dirancang bersama mitra untuk memberi pengalaman belajar yang menyenangkan, dengan pemantauan perkembangan peserta secara berkala.",
  },
  {
    img: "/icons/program/p2.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Janji Baik Berkelana",
    desc: "Janji Baik Berkelana adalah program study tour perdana bagi siswa Janji Baik yang dirancang sebagai sarana belajar di luar kelas. Melalui kegiatan ini, siswa diajak mengeksplorasi lingkungan baru, memperluas wawasan, dan membangun kebersamaan dalam suasana yang menyenangkan dan penuh makna.",
  },
  {
    img: "/icons/program/p3.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Penerimaan Peserta Didik Baru (PPDB) Siswa Janji Baik",
    desc: "Penerimaan Peserta Didik Baru (PPDB) Sekolah Janji Baik masih dibuka untuk anak putus sekolah dan keluarga pra-sejahtera dari seluruh Indonesia. Pendaftaran gratis, bisa dilakukan sepanjang tahun, dan terbuka untuk semua usia. Dengan sistem belajar fleksibel, ijazah resmi, serta dukungan beasiswa, program ini memberi kesempatan kedua bagi setiap anak untuk melanjutkan pendidikan dan membangun masa depan yang lebih baik.",
  },
  {
    img: "/icons/program/p4.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Memperingati Hari Nasional",
    desc: "Janji Baik secara rutin memperingati berbagai hari nasional sebagai bagian dari upaya menumbuhkan nilai kebangsaan, kepedulian sosial, dan rasa cinta tanah air pada siswa. Kegiatan ini diisi dengan berbagai aktivitas tematik seperti diskusi, kreativitas seni, hingga aksi sosial yang relevan dengan makna peringatan. Melalui program ini, siswa diajak untuk memahami sejarah, nilai-nilai kebhinekaan, serta peran mereka sebagai generasi penerus bangsa.",
  },
  {
    img: "/icons/program/p5.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Kelulusan Siswa Janji Baik Class Of 2024",  
    desc: "Graduation Janji Baik Class of 2024 merupakan momen kelulusan pertama yang menandai pencapaian dan perjalanan penuh semangat para siswa. Acara ini akan diselenggarakan pada hari Minggu, 30 Juni 2024, sebagai bentuk apresiasi atas proses belajar dan tumbuh bersama di lingkungan Janji Baik. Ini bukan sekadar perayaan akhir, tapi langkah awal menuju masa depan yang lebih cerah bagi setiap lulusan.",
  },
];

function SekolahGratis() {
  return (
    <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
      {cardSekolahGratis.map((card, index) => (
        <div
          key={index}
          className="flex lg:flex-row flex-col bg-white shadow-jb gap-10 lg:gap-14 w-full p-6 rounded-2xl"
        >
          <img src={card.img} alt="" />
          <div className="flex flex-col justify-between gap-4">
            <span className="text-base text-[#01B4BB]">{card.subtitle}</span>
            <h1 className="text-2xl lg:text-[35px] font-bold text-black">{card.title}</h1>
            <p className="text-sm lg:text-base text-[#72717B]">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SekolahGratis;
