const TeamMembers = [
  {
    name: "Jovi Oktaviansyah",
    role: "Pendiri Yayasan",
    image: "icons/teamkami/kajovi.png",
  },
  {
    name: "Syahroy",
    role: "Ketua Yayasan",
    image: "icons/teamkami/kasyahroy.png",
  },
  {
    name: "Siti Lailatul Fauziah",
    role: "Kepala Sekolah Janji Baik",
    image: "icons/teamkami/kazi.png",
  },
  {
    name: "Fitra Mutiarahayu",
    role: "Sekretaris Yayasan",
    image: "icons/teamkami/kamut.png",
  },
  {
    name: "Rochma Solehah (Omen) ",
    role: "Kadiv Creative Seeker",
    image: "icons/teamkami/kaomen.png",
  },
  {
    name: "Khalissa",
    role: "Wakil Kadiv Creative Seeker",
    image: "icons/teamkami/kakhalis.png",
  },
  {
    name: "Zulfa Yustianuari",
    role: "Kadiv Counselor",
    image: "icons/teamkami/kazulfa.png",
  },
  {
    name: "Nada Indah",
    role: "Wakil Kadiv Counselor",
    image: "icons/teamkami/kanada.png",
  },
  {
    name: "Pandu Pangestu",
    role: "Kadiv Human Responsibility",
    image: "icons/teamkami/kapandu.png",
  },
  {
    name: "Fergie Virginia",
    role: "Wakil Kadiv Human Responsibility",
    image: "icons/teamkami/kafergie.png",
  },
  {
    name: "Elisa Vernandes",
    role: "Kadiv Growth Maker",
    image: "icons/teamkami/kaelisa.png",
  },
  {
    name: "Muhammad Sofiyudin",
    role: "Wakil Kadiv Growth Maker",
    image: "icons/teamkami/kasofiyudin.png",
  },
  {
    name: "Aida Safrizal",
    role: "Kadiv Student Glory",
    image: "icons/teamkami/kaaida.png",
  },
  {
    name: "Kayla Azzura",
    role: "Kadiv Digital Heroes",
    image: "icons/teamkami/kakayla.png",
  },
  {
    name: "Sujin Latifa",
    role: "Kadiv Canvas Think",
    image: "icons/teamkami/kasujin.png",
  },
];

const TeamGaleri = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-15">
        <h1 className="text-3xl pl-5 md:pl-12 font-bold whitespace-nowrap">Dibalik Setiap Janji, Ada Kami!</h1>
        <img
          src="/icons/garis-news.png"
          alt=""
          className="w-[50%] hidden md:block"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TeamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden text-center p-4 transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[rgba(69,179,157,0.2)]"
          >
            <img
              src={`${member.image}`}
              alt={member.name}
              className="w-full h-60 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">sebagai {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGaleri;
