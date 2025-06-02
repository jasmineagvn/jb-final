import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const card = [
  {
    image: "/icons/kolaborasi/card1.jpg",
    title: "Pertamina",
    text: "Pertamina",
  },
  {
    image: "/icons/kolaborasi/card2.jpg",
    title: "Universitas Indonesia",
    text: "Penandatanganan Kerjasama Janji Baik dengan Kesejahteraan Sosial Universitas Indonesia",
  },
  {
    image: "/icons/kolaborasi/card3.jpg",
    title: "KitaBisa",
    text: "Kolaborasi Janji Baik dan Kitabisa.com Hadirkan Dukungan Bermakna bagi Siswa Difabel lewat Program Lingkar Kasih",
  },
  {
    image: "/icons/kolaborasi/card4.png",
    title: "bakrie Center Foundation",
    text: "Pemberian Penghargaan The Most Innovative Program of Practical Program dari BCF kepada Janji Baiky",
  },
];

const ProgramCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {card.map((activity, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-[12px] overflow-hidden">
              <img
                src={activity.image}
                alt={`Kegiatan ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm font-bold text-gray-800 leading-snug">
                {activity.title}
              </div>
              <div className="px-4 pb-4 text-sm text-gray-800 leading-snug">
                {activity.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgramCards;