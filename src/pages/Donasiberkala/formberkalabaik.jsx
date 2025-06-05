import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormBerkalaBaik = () => {
  const [paketDipilih, setPaketDipilih] = useState(1); // default ke paket 1

  const handlePaketChange = (e) => {
    setPaketDipilih(parseInt(e.target.value));
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-[30px] text-center font-semibold mb-2 pb-6">
        Pilihan Paket Berkala Baik
      </h2>
      <div className="mx-auto mb-8 h-1 w-140 bg-black rounded"></div>

      {/* Paket Pilihan */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            id: 1,
            label: "Paket Warga 25rb/bln",
            src: "/icons/berkalabaik/paketwarga.png",
          },
          {
            id: 2,
            label: "Paket Kecil 50rb/bln",
            src: "/icons/berkalabaik/paketkota.png",
          },
          {
            id: 3,
            label: "Paket Kepedulian 75rb/bln",
            src: "icons/berkalabaik/paketkepulauan.png",
          },
          {
            id: 4,
            label: "Paket Nusantara 100rb/bln",
            src: "icons/berkalabaik/paketnusantara.png",
          },
          {
            id: 5,
            label: "Paket Exclusive (diatas 100k/bln, nominal dibebaskan)",
            src: "icons/berkalabaik/paketexclusive.png",
          },
        ].map((paket, idx) => (
          <label
            key={idx}
            className="flex flex-col items-center p-3 cursor-pointer"
          >
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="paket"
                className="mr-2"
                value={paket.id}
                checked={paketDipilih === paket.id}
                onChange={handlePaketChange}
              />
              <span className="font-medium text-sm text-center">
                {paket.label}
              </span>
            </div>
            <img
              src={paket.src}
              alt={paket.label}
              className="w-32 md:w-40 h-auto"
            />
          </label>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-[#12121299]">
            Alamat Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ketik Alamat Email"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Nama */}
        <div>
          <label className="block mb-2 font-semibold text-sm text-[#12121299]">
            Nama Lengkap<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nama"
            placeholder="Ketik Nama"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Tempat Lahir */}
        <div>
          <label className="block mb-2 font-semibold text-[#12121299] text-sm">
            Tempat Lahir<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="tempatLahir"
            placeholder="Ketik Tempat Lahir"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Tanggal Lahir */}
        <div>
          <label className="block mb-2 font-semibold text-[#12121299] text-sm">
            Tanggal Lahir<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="tanggalLahir"
            required
            className="w-[425px] border rounded-[12px] p-2 h-[56px] text-[#12121299]"
          />
        </div>

        {/* No HP */}
        <div>
          <label className="block mb-2 font-semibold text-[#12121299] text-sm">
            No.HP atau WhatsApp<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Ketik No.HP atau WhatsApp"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Alamat */}
        <div>
          <label className="block mb-2 font-semibold text-[#12121299] text-sm">
            Alamat Lengkap (Sesuai KTP/KK)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="alamat"
            placeholder="Ketik Alamat"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Nominal - hanya muncul jika paket exclusive */}
        {paketDipilih === 5 && (
          <div>
            <label className="block mb-2 font-semibold text-[#12121299] text-sm">
              Jika Anda Memilih Paket Exclusive, Tuliskan Nominal Donasi disini (Misal: Rp.150.000, Rp.200.000, dll)*
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="nominal"
              placeholder="Ketik Nominal (misal: 150000)"
              className="w-full border rounded-[12px] p-2 h-[56px]"
            />
          </div>
        )}

        {/* Tanggal Pembayaran */}
        <div>
          <label className="block mb-2 font-semibold text-[#12121299] text-sm">
            Tanggal Pembayaran Setiap Bulan (Pilih tanggal dari 1 sampai 31)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="tanggalPembayaran"
            placeholder="Ketik Tanggal"
            min="1"
            max="31"
            required
            className="w-full border rounded-[12px] p-2 h-[56px]"
          />
        </div>

        {/* Checkbox */}
        <div className="space-y-2 text-[14px]">
          <label className="block mb-6 mt-6 font-semibold text-[#12121299] text-sm">
            Silahkan Isi Ketersediaan berikut
            <span className="text-red-500">*</span>
          </label>
          <label className="flex items-start gap-2 text-[#12121299] mb-8">
            <input type="checkbox" className="scale-150 mt-1" required />
            <span>
              Saya menyatakan kesediaan berdonasi di Berkala Baik dengan
              kerelaan hati dan tanpa paksaan
            </span>
          </label>
          <label className="flex items-start gap-2 text-[#12121299] mb-8">
            <input type="checkbox" className="scale-150 mt-1" required />
            <span>
              Saya berkomitmen untuk berdonasi sesuai nominal dan tanggal yang
              sudah saya tetapkan
            </span>
          </label>
          <label className="flex items-start gap-2 text-[#12121299] mb-8">
            <input type="checkbox" className="scale-150 mt-1" required />
            <span>
              Saya menyadari aksi kebaikan yang dilakukan Janji Baik untuk
              membantu anak putus sekolah di Indonesia
            </span>
          </label>
        </div>

        {/* Tombol */}
        <div className="text-right">
          <Link to="/successpageberkalabaik">
            <button className="bg-[#EC901D] text-white px-6 py-2 w-[161px] rounded-full hover:bg-orange-600 transition cursor-pointer">
              Kirim
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormBerkalaBaik;
