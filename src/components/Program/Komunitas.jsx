const cardKomunitas = [
    {
      img: "/icons/program/p17.png",
      subtitle: "Komunitas Kerelawanan", 
      title: "Pesta Ide Relawan",
      desc: "Pesta Ide Relawan adalah kesempatan bagi relawan yang baru bergabung untuk saling mengenal, berbagi ide, dan merencanakan langkah-langkah selanjutnya dalam program sosial. Dalam acara ini, para relawan akan diperkenalkan dengan visi, misi, dan berbagai kegiatan yang akan dilakukan, sekaligus diberi ruang untuk menyampaikan ide-ide segar mereka. Pesta Ide Relawan bertujuan untuk mempererat ikatan antar relawan baru dan mendorong kolaborasi dalam mewujudkan perubahan positif.",
    },
    {
      img: "/icons/program/p18.png",
      subtitle: "Komunitas Kerelawanan",
      title: "Forum Good Discussion (FGD)",
      desc: "Forum Good Discussion adalah program dari Janji Baik yang menjadi ruang berbagi, bertukar pikiran, dan memperluas wawasan melalui diskusi online maupun offline. Program ini diadakan secara rutin dengan topik-topik inspiratif yang relevan dengan perkembangan diri dan lingkungan sekitar. Setiap sesi dirancang untuk mendorong partisipasi aktif, membangun sudut pandang baru, dan memperkuat keterampilan berpikir kritis para relawan.",
    },
    {
      img: "/icons/program/p19.png",
      subtitle: "Komunitas Kerelawanan ",
      title: "Catatan Akhir Kebaikan",
      desc: "Catatan Akhir Kebaikan adalah program refleksi dan apresiasi dari Janji Baik yang menjadi momen untuk mengevaluasi perjalanan program sekaligus merayakan pencapaian bersama. Kegiatan ini dikemas secara santai dan menyenangkan, melalui aktivitas kumpul, berbagi cerita, dan jalan-jalan ringan. Melalui program ini, para relawan diajak untuk merefleksikan pengalaman, belajar dari proses, dan mempererat hubungan satu sama lain.",
    },
    {
        img: "/icons/program/p20.png",
        subtitle: "Komunitas Kerelawanan ",
        title: "Bintang Baik",
        desc: "Program Bintang Baik adalah bentuk apresiasi dari Janji Baik untuk relawan yang telah memberikan kontribusi luar biasa dalam setiap kegiatan sosial. Relawan yang menunjukkan dedikasi, semangat, dan dampak positif dalam program akan diakui sebagai Bintang Baik. Penghargaan ini bertujuan untuk memotivasi dan menginspirasi para relawan agar terus bersemangat dalam berbuat baik dan memberikan kontribusi lebih besar bagi masyarakat.",
      },
  ];
  
  function Komunitas() {
    return (
      <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
        {cardKomunitas.map((card, index) => (
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
    )
  }
  
  export default Komunitas;