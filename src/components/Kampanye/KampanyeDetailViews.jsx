import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import campaigns from "@/data/kampanyeDetailData";

const KampanyeDetailViews = () => {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id);
  if (!campaign) return <p>Kampanye tidak ditemukan.</p>;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-6 space-y-6">
        {/* Gambar utama dan judul */}
        <div className="text-center">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-[411px] object-cover rounded-[30px] shadow-md"
          />
          <h1 className="text-2xl font-bold mb-4 mt-6 text-left">
            {campaign.title}
          </h1>
          <div className="text-[#01B4BB] font-bold mt-2 text-left">
            Rp{campaign.collected.toLocaleString()}{" "}
            <span className="text-gray-600 font-normal">
              dari Rp{campaign.target.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded mt-4">
            <div
              className="bg-[#01B4BB] h-2 rounded"
              style={{
                width: `${Math.min(
                  (campaign.collected / campaign.target) * 100,
                  100
                )}%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1 text-right">
            {campaign.daysLeft} Hari
          </p>
        </div>

        {/* Cerita */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-left">Cerita</h2>
          {campaign.storyImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {campaign.storyImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Cerita ${idx + 1}`}
                  className="w-1/4 rounded shadow"
                />
              ))}
            </div>
          )}
          <p className="text-gray-800 leading-relaxed tracking-wide indent-8 whitespace-pre-line text-justify">
            {campaign.description}
          </p>
        </div>

        {/* Donasi */}
        <div>
          <h2 className="text-base font-semibold mb-4 text-left">
            Cara Berdonasi
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            {/* Teks pembuka di atas logo dan detail */}
            <p className="mb-4 font-bold">
              Donasi dapat ditransferkan melalui :
            </p>

            <div className="flex items-start space-x-4">
              {/* Logo BCA */}
              <img src="/icons/logoBCA.png" alt="BCA" className="w-24 h-auto" />

              {/* Informasi Donasi */}
              <div className="text-left mb-4">
                <p className="font-semibold mt-4">
                  {campaign.bankAccount.number}
                </p>
                <p className="mt-1 font-bold">
                  a.n {campaign.bankAccount.accountName}
                </p>
                <p className="mt-2 font-semibold text-orange-500 text-[22px]">
                  Kode Unik : “{campaign.bankAccount.uniqueCode}”
                </p>
                <p className="mt-4 text-sm font-bold">
                  Tambahkan kode unik di akhir nominal donasi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-18">
          {/* Tombol Chevron bulat */}
          <Link
            to="/kampanye"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EC901D] hover:bg-orange-600 text-white shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>

          {/* Tombol Donasi */}
          <Link
            to="/donasiumum"
            className="flex items-center justify-center bg-[#EC901D] hover:bg-orange-600 text-white py-3 px-8 rounded-full shadow text-sm md:text-base"
          >
            Donasi Sekarang Yuk!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KampanyeDetailViews;
