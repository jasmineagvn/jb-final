const card = [
  {
    image: "./icons/kolaborasi/card1.png",
    text: "Kolaborasi Janji Baik dan Kitabisa.com Hadirkan Dukungan Bermakna bagi Siswa Difabel lewat Program Lingkar Kasih",
  },
  {
    image: "./icons/kolaborasi/card2.png",
    text: "Pemberian Penghargaan The Most Innovative Program of Practical Program dari BCF kepada Janji Baik",
  },
  {
    image: "./icons/kolaborasi/card3.png",
    text: "Pesta Ide Relawan & Masa Pengenalan Lingkungan Sekolah (MPLS) Bersama Forum Muda Indonesia (FIM)",
  },
  {
    image: "./icons/kolaborasi/card4.png",
    text: "Janji Baik di week of welcoming mahasiswa BINUS University",
  },
];

const ProgramCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {card.map((activity, index) => (
                <div className="bg-white shadow-md">
                    <img
                        src={activity.image}
                        alt={`Kegiatan ${index + 1}`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-sm text-gray-800 leading-snug">
                        {activity.text}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProgramCards;