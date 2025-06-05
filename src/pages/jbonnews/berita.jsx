import React from "react";

const beritaCard = [
  {
    image: "/icons/jbonnews/news1.png",
    title: "Bulan Baik: Berbagi Kebaikan Bersama Sekolah Janji Baik",
    url: "https://www.kompasiana.com/muhamadsofiyudin1016/6605248f1470935f3a2b9c02/bulan-baik-berbagi-kebaikan-bersama-sekolah-janji-baik",
    date: "12 Desember 2022",
    description:
      "Sekolah Janji Baik merupakan sekolah gratis berbasis digital yang memungkinkan peserta didik yang memiliki keterbatasan ekonomi dapat melanjutkan pendidikan di sekolah.",
  },
  {
    image: "/icons/jbonnews/news2.png",
    title: "Self Kindness : Berbagi Kebaikan Untuk Diri Bersama Janji Baik",
    url: "https://jurnalpost.com/self-kindness-berbagi-kebaikan-untuk-diri-bersama-janji-baik/66750/",
    date: "27 Maret 2024",
    description:
      "Minggu, 24 Maret 2024 – Janji Baik, Startup yang bergerak di bidang Education Tech & Crowdfunding baru-baru ini melaksanakan salah satu program...",
  },
  {
    image: "/icons/jbonnews/news3.png",
    title:
      "MNC University Gandeng Sekolah Janji Baik Gelar Program Pengabdian kepada Masyarakat di Tangsel",
    url: "https://edukasi.sindonews.com/read/1329433/212/mnc-university-gandeng-sekolah-janji-baik-gelar-program-pengabdian-kepada-masyarakat-di-tangsel-1708999368",
    date: "27 Februari 2024",
    description:
      "MNC University (MNCU) bekerja sama dengan Sekolah Janji Baik melaksanakan kegiatan Pengabdian...",
  },
  {
    image: "/icons/jbonnews/news4.png",
    title:
      "Peringati Hari Peduli Sampah Nasional, Janji Baik Gerakkan Siswa Kelola Sampah",
    url: "https://pojokpublik.id/daerah/banten/10721/janji-baik-gelar-kegiatan-perigatan-hari-peduli-sampah-nasional-2023/",
    date: "20 Februari 2023",
    description:
      "Dalam rangka memperingati Hari Peduli Sampah Nasional (HPSN) 2023 yang jatuh pada tanggal 21 Februari 2023, Janji Baik turut mengadakan...",
  },
  {
    image: "/icons/jbonnews/news5.png",
    title: "Startup Janji Baik Hadirkan Sekolah Gratis bagi Siswa Prasejahtera",
    url: "https://www.kompas.com/edu/read/2022/04/20/155427271/startup-janji-baik-hadirkan-sekolah-gratis-bagi-siswa-prasejahtera",
    date: "20 April 2022",
    description:
      "Pendidikan merupakan hak fundamental bagi setiap anak. Pada kenyataannya, masih banyak dijumpai anak-anak Indonesia yang putus sekolah dikarenakan faktor ekonomi. Melalui program “Janji Baik”, sejumlah anak...",
  },
  {
    image: "/icons/jbonnews/news6.png",
    title: "Sekolah Gratis untuk Anak-anak Tidak Mampu",
    url: "https://www.beritasatu.com/photo/80163/sekolah-gratis-untuk-anak-anak-tidak-mampu",
    date: "19 April 2022",
    description:
      "Sejumlah anak muda komunitas Janji Baik yang fokus pada kegiatan pendidikan memberikan edukasi pendidikan dan permainan kepada...",
  },
  {
    image: "/icons/jbonnews/news7.png",
    title:
      "Gandeng UMB dan Pemkot Tangsel, Sekolah Janji Baik Kolaborasi Program Kesejahteraan Psikologis",
    url: "https://faktabanten.co.id/tangerang/gandeng-umb-dan-pemkot-tangsel-sekolah-janji-baik-kolaborasi-program-kesejahteraan-psikologis/",
    date: "2 Mei 2025",
    description:
      "Program ini terdiri dari dua sesi edukasi dan pendampingan yang dipandu oleh dosen psikologi UMB untuk guru, relawan, dan siswa Sekolah Janji Baik, yakni sesi pertama pada 16 Februari 2025 untuk...",
  },
  {
    image: "/icons/jbonnews/news8.png",
    title:
      "Peringati Suicide Prevention Month, Janji Baik Menyelenggarakan Tentang Pencegahan Bunuh Diri",
    url: "https://www.kompasiana.com/dianariyanisurya21/66f7f74834777c21856c4412/peringati-suicide-prevention-month-janji-baik-menyelenggarakan-tentang-pencegahan-bunuh-diri",
    date: "28 September 2024",
    description:
      "Dalam rangka memperingati World Suicide Prevention Month, Janji Baik mengadakan seminar pada 22 September 2024 di SDN 02 Perigi, Tangerang Selatan, dengan tema Jangan dibiarkan pentingnya...",
  },
  {
    image: "/icons/jbonnews/news9.png",
    title: "Janji Baik Kenalkan Relawan Difabel Inspiratif",
    url: "https://banpos.co/2023/02/19/janji-baik-kenalkan-relawan-difabel-inspiratif/",
    date: "21 Februari 2023",
    description:
      "Sekolah Janji Baik baru-baru ini kembali menunjukkan eksistensinya kepada masyarakat luas dengan membuktikan bahwa menjadi difabel bukanlah sebuah keterbatasan. Dalam laman Instagramnya, @janjibaik.id memperkenalkan...",
  },
];

function Berita() {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl pl-5 md:pl-12 font-bold">Berita Terbaru</h1>
        <img
          src="/icons/garis-news.png"
          alt=""
          className="w-[80%] hidden md:block"
        />
      </div>

      <div className="max-w-7xl mt-12 bg-[#A9EAED] rounded-3xl mx-5 md:mx-auto">
        <div className="flex flex-wrap justify-center gap-10 px-9 py-16">
          {beritaCard.map((items, index) => (
            <div key={index} className="flex flex-col gap-4 w-[350px] bg-white px-4 py-5  rounded-2xl">
              <img src={items.image} alt="" />
              <h1 className="text-lg text-[#063FFB] font-semibold leading-snug">
                <a
                  href={items.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#063FFB] font-semibold hover:underline underline-offset-4 transition-all duration-300"
                >
                  {items.title}
                </a>
              </h1>
              <span className="text-sm text-gray-500">{items.date}</span>
              <p className="text-sm text-gray-500">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Berita;
