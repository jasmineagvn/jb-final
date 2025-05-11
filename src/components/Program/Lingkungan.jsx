const cardLingkungan = [
  {
    img: "/icons/program/p7.png",
    subtitle: "Lingkungan",
    title:
      "Penanaman Mangrove Bersama Ayo Less Waste di Ketapang Urban Aquaculture",
    desc: "Penanaman Mangrove Bersama di Ketapang Urban Aquaculture dilaksanakan pada 27 Agustus 2023 sebagai bagian dari upaya pelestarian lingkungan dan kampanye Ayo Less Waste. Kegiatan ini mengajak peserta untuk berkontribusi langsung menanam mangrove, sekaligus belajar tentang pentingnya ekosistem pesisir dalam mencegah abrasi dan menjaga keseimbangan alam. Melalui aksi ini, Janji Baik mendorong kolaborasi dan kesadaran kolektif untuk menjaga bumi dengan langkah nyata yang berkelanjutan.",
  },
  {
    img: "/icons/program/p8.png",
    subtitle: "Lingkungan",
    title: "Aksi Kelola Sampah di Lapak Anijaya: Hari Peduli Sampah Nasional ",
    desc: "Dalam rangka Hari Peduli Sampah Nasional 2023, Sekolah Janji Baik menggelar kegiatan bertema Peran Kita, Kelola Sampah di lapak pemulung Anijaya, Pondok Aren, Tangerang Selatan. Kegiatan ini bertujuan mengajak siswa lebih peduli terhadap lingkungan dengan belajar memilah dan mengelola sampah. Dipilihnya lokasi ini juga menjadi bentuk dukungan bagi beberapa siswa Janji Baik yang merupakan anak dari pemulung di kawasan tersebut.",
  },
];

function Lingkungan() {
  return (
    <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
      {cardLingkungan.map((card, index) => (
        <div
          key={index}
          className="flex lg:flex-row flex-col bg-white shadow-jb gap-10 lg:gap-14 w-full p-6 rounded-2xl"
        >
          <img src={card.img} alt="" />
          <div className="flex flex-col justify-between gap-4">
            <span className="text-base text-[#01B4BB]">{card.subtitle}</span>
            <h1 className="text-2xl lg:text-[35px] font-bold text-black leading-tight">{card.title}</h1>
            <p className="text-sm lg:text-base text-[#72717B]">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lingkungan;
