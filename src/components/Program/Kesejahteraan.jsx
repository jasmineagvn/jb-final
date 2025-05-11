const cardKesejahteraan = [
    {
      img: "/icons/program/p12.png",
      subtitle: "Kesejahteraan Sosial",
      title: "Kolaborasi Edukatif MNC University Bersama Sekolah Janji Baik",
      desc: "MNC University bersama Sekolah Janji Baik melaksanakan kegiatan Pengabdian kepada Masyarakat (PKM) di SDN Perigi 02, Tangerang Selatan pada 26 Februari 2024. Kegiatan ini menghadirkan dosen dan mahasiswa MNC University yang membawakan materi seputar desain dan branding untuk siswa, serta pelatihan pembuatan aplikasi administrasi akademik untuk para relawan. Kolaborasi ini menjadi bentuk nyata dukungan terhadap peningkatan kapasitas siswa dan relawan di lingkungan Janji Baik.",
    },
    {
      img: "/icons/program/p13.png",
      subtitle: "Kesejahteraan Sosial",
      title: "Kolaborasi Psikologi UMB dan Janji Baik dalam Seminar Pengabdian Masyarakat",
      desc: "Fakultas Psikologi UMB bekerja sama dengan Sekolah Janji Baik menggelar seminar di SDN Lengkong Wetan 01 Serpong pada 19 Maret 2023. Seminar ini membahas topik kepribadian, gaya belajar, pengembangan karakter, dan self-esteem anak untuk siswa, orang tua, dan relawan. Kegiatan diakhiri dengan pemberian donasi dan cendera mata sebagai apresiasi.",
    },
    {
        img: "/icons/program/p14.png",
        subtitle: "Kesejahteraan Sosial",
        title: "Bulan Baik (Berbagi Takjil Gratis di Bulan Ramadhan)",
        desc: "Dalam semangat bulan Ramadhan, Sekolah Janji Baik mengadakan kegiatan berbagi takjil gratis yang melibatkan siswa dan relawan sebagai bentuk kepedulian terhadap sesama. Kegiatan ini menjadi ruang belajar sekaligus ladang kebaikan, di mana para siswa diajak untuk menumbuhkan empati, berbagi dengan tulus, dan merasakan indahnya memberi. Melalui aksi sederhana ini, kami percaya bahwa kebaikan sekecil apa pun bisa memberi dampak besar, terutama ketika dilakukan bersama di bulan penuh berkah.",
    },
    {
        img: "/icons/program/p15.png",
        subtitle: "Kesejahteraan Sosial",
        title: "KKM HMJ PNF UNTIRTA ",
        desc: "Program KKM HMJ PNF UNTIRTA di Janji Baik adalah bentuk pengabdian mahasiswa melalui keterlibatan dalam kegiatan kebangsaan seperti peringatan hari nasional, diskusi, dan aksi sosial. Mahasiswa berkontribusi langsung dalam menumbuhkan nilai kebhinekaan dan kepedulian sosial di masyarakat, khususnya bagi generasi muda.",
    },
    {
        img: "/icons/program/p16.png",
        subtitle: "Kesejahteraan Sosial",
        title: "Kolaborasi Janji Baik dan Kitabisa.com Hadirkan Dukungan Bermakna bagi Siswa Difabel lewat Program Lingkar Kasih",
        desc: "Program KKM HMJ PNF UNTIRTA di Janji Baik adalah bentuk pengabdian mahasiswa melalui keterlibatan dalam kegiatan kebangsaan seperti peringatan hari nasional, diskusi, dan aksi sosial. Mahasiswa berkontribusi langsung dalam menumbuhkan nilai kebhinekaan dan kepedulian sosial di masyarakat, khususnya bagi generasi muda.",
    },
  ];
  
  function Kesejahteraan() {
    return (
      <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
        {cardKesejahteraan.map((card, index) => (
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
  
export default Kesejahteraan;  