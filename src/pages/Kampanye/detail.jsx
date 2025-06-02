import React from "react";
import { useParams } from "react-router-dom";
import campaigns from "./data";

const Detail = () => {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === parseInt(id));

  if (!campaign) return <p>Kampanye tidak ditemukan.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Gambar utama dan judul */}
      <div>
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full rounded-xl shadow-md"
        />
        <h1 className="text-2xl font-semibold mt-4">{campaign.title}</h1>
        <div className="text-blue-600 font-bold mt-2">
          Rp. {campaign.collected.toLocaleString()}{" "}
          <span className="text-gray-600 font-normal">
            terkumpul dari Rp. {campaign.target.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{
              width: `${Math.min(
                (campaign.collected / campaign.target) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{campaign.daysLeft} Hari</p>
      </div>

      {/* Cerita */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Cerita</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {campaign.storyImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Cerita"
              className="w-1/4 rounded shadow"
            />
          ))}
        </div>
        <p className="text-gray-800 whitespace-pre-line">{campaign.description}</p>
      </div>

      {/* Donasi */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Cara Berdonasi</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <p>
            Donasi dapat ditransferkan melalui:
            <br />
            <span className="font-semibold">8991 - 3161 - 91</span>
            <br />
            a.n Yayasan Baik Media Indonesia
            <br />
            <span className="text-blue-600 font-bold">
              Kode Unik : "{campaign.uniqueCode}"
            </span>
            <br />
            <span className="text-sm text-gray-500">
              Tambahkan kode unik di akhir nominal donasi
            </span>
          </p>
          <img
            src="/icons/bca.png"
            alt="BCA"
            className="w-20 mt-4"
          />
        </div>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow w-full">
        Donasi Sekarang Yuk!
      </button>
    </div>
  );
};

export default Detail;