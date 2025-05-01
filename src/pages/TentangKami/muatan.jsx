import Button from "../../components/Button";

const cards = [
  {
    image: "/icons/kelasentre.png",
    title: "Kelas Entrepreneur: ",
    description: "Digital Marketing, Kiat Membuka Usaha, dll.",
  },
  {
    image: "/icons/kelasidola.png",
    title: "Kelas Idola: ",
    description: "Menghadirkan praktisi seperti Atlet, Penulis, Penyanyi, Aktor, Selebgram, Direktur, Dokter, atau profesi lainnya.",
  },
  {
    image: "/icons/proyeksosial.png",
    title: "Proyek Sosial: ",
    description: "Merencanakan program untuk mengajarkan kepedulian peserta didik, seperti berbagi takjil di bulan puasa, dan lainnya.",
  },
  {
    image: "/icons/kelasseni.png",
    title: "Kelas Seni: ",
    description: "Alat musik, Menari, Melukis, Prakarya, Perkusi dari barang bekas, dll.",
  },
  {
    image: "/icons/kelasolahraga.png",
    title: "Kelas Olahraga: ",
    description: " Berenang, Memanah, Futsal, dll.",
  },
  {
    image: "/icons/kelaspengembangan.png",
    title: "Kelas Pengembangan Diri: ",
    description: "Manajemen waktu, Public Speaking, Kedisiplinan, Bahaya Merokok, dll.",
  },
  {
    image: "/icons/kelasliterasi.png",
    title: "Kelas Literasi Digital: ",
    description: "Digital Marketing, Kiat Membuka Usaha, dll.",
  },
];

const Muatan = () => {
  return (
    <div className="text-center py-12 px-4 mt-18">
      <h2 className="text-2xl font-semibold">Muatan Belajar Non-Akademik</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-[80px]">
        {cards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-[#3C3F41]  flex flex-col w-[250px] h-[300px] shadow-2xl py-14">
            <img src={card.image} alt="" className="mx-auto mb-4" />
            <h2 className="font-bold text-xl mb-2">{card.title} </h2>
            <p className="text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 flex justify-end">
        <div className="relative w-[600px] h-2 mt-22">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-400 transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Muatan;
