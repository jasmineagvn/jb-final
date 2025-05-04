const cardSekolahGratis = [
  {
    img: "/icons/program/p1.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Kegiatan Belajar Mengajar",
    desc: "Kegiatan Belajar Mengajar merupakan program dari Janji Baik yang mendukung pengembangan ilmu, karakter, dan keterampilan siswa melalui sesi online yang interaktif. Kegiatan ini dilaksanakan secara rutin dan disesuaikan dengan jenjang kelas masing-masing peserta. Setiap sesi dirancang untuk memberikan pengalaman belajar yang menyenangkan, sekaligus memantau perkembangan siswa secara berkala.",
  },
  {
    img: "/icons/program/p2.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Kelas Kreasi Janji Baik",
    desc: "Kelas Kreasi adalah program non-akademik dari Janji Baik yang mendukung pengembangan kreativitas, karakter, dan keterampilan hidup siswa melalui kegiatan ekstrakurikuler. Program ini diadakan sebulan sekali setiap hari Minggu di SDN Perigi 02, Tangerang Selatan, dan terbuka untuk seluruh siswa aktif. Kegiatan dirancang bersama mitra untuk memberi pengalaman belajar yang menyenangkan, dengan pemantauan perkembangan peserta secara berkala.",
  },
  {
    img: "/icons/program/p1.png",
    subtitle: "Sekolah Gratis Berbasis Teknologi",
    title: "Janji Baik Berkelana",
    desc: "Janji Baik Berkelana adalah program study tour perdana bagi siswa Janji Baik yang dirancang sebagai sarana belajar di luar kelas. Melalui kegiatan ini, siswa diajak mengeksplorasi lingkungan baru, memperluas wawasan, dan membangun kebersamaan dalam suasana yang menyenangkan dan penuh makna.",
  },
];

function SekolahGratis() {
  return (
    <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
      {cardSekolahGratis.map((card, index) => (
        <div
          key={index}
          className="flex bg-white shadow-jb gap-14 w-full p-6 rounded-2xl"
        >
          <img src={card.img} alt="" />
          <div className="flex flex-col justify-between">
            <span className="text-base text-[#01B4BB]">{card.subtitle}</span>
            <h1 className="text-[35px] font-bold text-black">{card.title}</h1>
            <p className="text-base text-[#72717B]">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SekolahGratis;
