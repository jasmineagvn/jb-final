import React from 'react';
import { useNavigate } from 'react-router-dom';

const BerkalaBaikSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Kebaikan Gak Harus Sekali Besar — Bisa Berkala,<br />Tetapi Bermakna
      </h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Berkala Baik hadir untuk kamu yang ingin berbagi rutin selama 12 bulan bersama #SiBerjanjiBaik.
        Semua donasi disalurkan langsung untuk membantu adik-adik di Janji Baik belajar dan bertumbuh.
        <br />Sedikit demi sedikit, mari bantu kita wujudkan harapan.
      </p>

      <div className="flex justify-center mb-15 mt-10">
        <img
          src="/icons/berkalabaik/logo.png"
          alt="Berkala Baik Logo"
          className="w-[250px] md:w-[300px]"
        />
      </div>

      <div className="bg-[#01B4BB] rounded-[55px] shadow-md px-6 py-10 text-white">
        <p className="mb-6 text-base md:text-lg font-medium leading-relaxed">
          Siap untuk bergabung di Berkala Baik? Klik tombol di bawah<br />
          untuk melangkah lebih jauh dan lanjutkan perjalananmu <br />bersama kami!
        </p>
        <button
          onClick={() => navigate('/lanjutkan')}
          className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition"
        >
          Lanjutkan Langkahmu
        </button>
      </div>
    </div>
  );
};

export default BerkalaBaikSection;