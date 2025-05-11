const cardBimbingan = [
  {
    img: "/icons/program/p9.png",
    subtitle: "Bimbingan & Kesehatan Mental", 
    title: "Janji Baik Bercerita",
    desc: "Janji Baik Bercerita adalah ruang aman untuk berbagi cerita bersama konselor sebaya, tanpa rasa takut atau khawatir karena semuanya akan dijaga dengan penuh kerahasiaan—kalau belakangan ini kamu merasa perlu didengar, yuk bercerita bersama kami.",
  },
  {
    img: "/icons/program/p10.png",
    subtitle: "Bimbingan & Kesehatan Mental",
    title: "Pendidikan Inklusi : Tumbuh Baik",
    desc: "Assessment Rutin Siswa Janji Baik merupakan kegiatan evaluasi bulanan yang dirancang untuk meninjau perkembangan belajar, keterampilan, dan karakter setiap siswa. Kegiatan ini menjadi bagian penting dari proses pendampingan, untuk memastikan bahwa setiap siswa tumbuh sesuai dengan potensi dan kebutuhan belajarnya. Bukan sekadar penilaian, assessment ini juga menjadi ruang refleksi bersama menuju pembelajaran yang lebih bermakna setiap bulannya.",
  },
  {
    img: "/icons/program/p11.png",
    subtitle: "Bimbingan & Kesehatan Mental",
    title: "Assesment Siswa Janji Baik",
    desc: "Assessment Rutin Siswa Janji Baik merupakan kegiatan evaluasi bulanan yang dirancang untuk meninjau perkembangan belajar, keterampilan, dan karakter setiap siswa. Kegiatan ini menjadi bagian penting dari proses pendampingan, untuk memastikan bahwa setiap siswa tumbuh sesuai dengan potensi dan kebutuhan belajarnya. Bukan sekadar penilaian, assessment ini juga menjadi ruang refleksi bersama menuju pembelajaran yang lebih bermakna setiap bulannya.",
  },
];

function Bimbingan() {
  return (
    <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
      {cardBimbingan.map((card, index) => (
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
  )
}

export default Bimbingan