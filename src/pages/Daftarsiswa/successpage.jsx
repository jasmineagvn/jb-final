import React from "react";
import { Link } from "react-router-dom";

const SuccessPageSiswa = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-10">
        Yeay! Pendaftaranmu sudah berhasil dikirim! <br />
        Selamat datang di keluarga besar <span className="text-[#01B4BB]">Janji Baik</span>! 
      </h1>

      <img
        src="/icons/successpage/daftarrelawan.png"
        alt="Terima Kasih"
        className="w-full md:w-80 mb-8"
      />

      <p className="max-w-xl text-base md:text-lg mb-10 text-[#72717B]">
        Terima kasih sudah mempercayai Janji Baik sebagai tempat belajarmu! 
        Tim kami akan segera menghubungimu dalam 1-3 hari kerja untuk proses selanjutnya.
        <br /><br />
        Pantau terus WhatsApp dan email kamu ya! Perjalanan belajar yang seru menanti! 📚✨
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/syaratdaftarsiswa"
          className="bg-[#01B4BB] text-white px-6 py-2 rounded-full hover:bg-teal-600 transition"
        >
          Lihat Syarat & Ketentuan
        </Link>
        <Link
          to="/"
          className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg max-w-md">
        <h3 className="font-semibold text-[#01B4BB] mb-2">Langkah Selanjutnya:</h3>
        <ul className="text-sm text-gray-600 text-left space-y-1">
          <li>✓ Tunggu konfirmasi dari tim Janji Baik</li>
          <li>✓ Siapkan dokumen yang diperlukan</li>
          <li>✓ Ikuti proses orientasi siswa baru</li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessPageSiswa;
