import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Horeee! Kamu sudah daftar menjadi bagian dari <br />
        <span className="font-bold">Janji Baik</span>, dan kami super excited!
      </h1>

      <img
        src="/icons/successpage/daftarrelawan.png"
        alt="Terima Kasih"
        className="w-full md:w-80 mb-8"
      />

      <p className="max-w-xl text-base md:text-lg mb-10">
        Terima kasih sudah mau mulai perjalanan keren ini bareng kami.
        Petualangan seru baru aja dimulai. Yuk, kita wujudkan janji baikmu mulai
        hari ini!
      </p>
      <div>
        <a
          href="/daftarrelawan"
          className="absolute right-8 lg:right-24 flex items-center gap-2 lg:mt-0 mt-8 bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500"
        >
          <img src="./icons/arrowleft.png" alt="Kembali" className="h-5 w-5" />
          <p>Kembali</p>
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
