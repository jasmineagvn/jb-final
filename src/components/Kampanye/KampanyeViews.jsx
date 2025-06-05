import React from "react";
import { Link } from "react-router-dom";
import campaigns from "@/data/kampanyeDetailData"; // Data sudah digabung di satu file

function KampanyeViews() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl lg:text-[50px] font-bold text-center mb-4 leading-tight">
        Kampanye Janji Baik
      </h2>
      <p className="text-center text-sm lg:text-base text-gray-600 w-full lg:w-[844px] mx-auto mb-20">
        Janji Baik adalah gerakan untuk menciptakan masa depan yang lebih adil
        dan penuh harapan bagi anak-anak Indonesia. Melalui program pendidikan
        inklusif, ruang belajar yang aman dan suportif, serta perhatian pada
        kesehatan mental, kami mendampingi mereka untuk tumbuh dengan utuh.
        Kampanye ini juga mengajak masyarakat terlibat dalam membangun
        kesejahteraan sosial melalui aksi-aksi yang menumbuhkan empati,
        kolaborasi, dan kepedulian terhadap lingkungan. Bersama, kita bisa
        menjadikan setiap janji sebagai nyata—bagi mereka yang membutuhkan ruang
        untuk tumbuh dan bermimpi.
      </p>

      <div className="max-w-6xl mx-auto mt-5 flex flex-wrap justify-center gap-5">
        {campaigns.map((item) => (
          <div
            key={item.id}
            className="flex lg:flex-row flex-col bg-white shadow-jb gap-14 w-full p-6 rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="aspect-video w-full lg:w-[300px] object-cover rounded-xl"
            />
            <div className="p-4 flex-1">
              <p className="text-sm text-[#01B4BB] font-medium mb-1">
                {item.tag}
              </p>
              <h2 className="text-[30px] font-bold mb-4">{item.title}</h2>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-4">
                <div
                  className="bg-cyan-600 h-2 rounded-full"
                  style={{
                    width: `${(item.collected / item.target) * 100}%`,
                  }}
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">
                Terkumpul <strong>Rp{item.collected.toLocaleString()}</strong>{" "}
                dari <strong>Rp{item.target.toLocaleString()}</strong>
              </div>
              <Link
                to={`/kampanye/${item.id}`}
                className="bg-orange-400 text-sm lg:text-base hover:bg-orange-500 text-white px-6 py-2 rounded-full w-[240px] h-[39px] mt-8 inline-block text-center"
              >
                Lihat Detail Kampanye
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="mt-20 w-[881px] h-[260px] bg-[#01B4BB] rounded-[55px] text-white text-center py-12">
          <p className="font-semibold text-lg lg:text-[24px] mb-2 px-3">
            Kami sudah melangkah lebih dulu. Sekarang giliranmu!
          </p>
          <p className="mb-10 text-base lg:text-[24px] font-bold">
            Apa aksi baikmu yang akan kamu mulai hari ini?
          </p>
          <Link
            to={"/daftarkolaborasi"}
            className="bg-orange-400 text-sm lg:text-base font-semibold hover:bg-orange-500 text-white px-8 py-4 w-[400px] h-[65px] mt-20 rounded-full"
          >
            Buat Aksi Baik Kamu, Yuk!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KampanyeViews;
