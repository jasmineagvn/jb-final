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
    desc: "Program asesmen siswa yang bersifat profesional dan berkala. Dengan pendampingan proses belajar, diharapkan mampu mengembangkan kemampuan emosional dan memastikan setiap siswa tumbuh sesuai potensi dan kebutuhannya.",
  },
  {
    img: "/icons/program/p11.png",
    subtitle: "Bimbingan & Kesehatan Mental",
    title: "Assesment Siswa Janji Baik",
    desc: "Asesmen yang dilakukan untuk monitoring kemampuan siswa selama proses belajar. Tidak hanya penilaian, asesmen menjadi ruang refleksi bersama menuju pembelajaran yang tepat dan lebih optimal.",
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

            {card.title === "Janji Baik Bercerita" && (
              <button className="mt-2 w-[278px] h-[53px] px-5 py-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-full shadow">
                Yuk Mulai Ceritamu!
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bimbingan