import React from "react";
import { Link } from "react-router-dom";

const SuccessPageBerkalaBaik = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-10">
        Terima kasih sudah berdonasi melalui Berkala Baik! <br /> Dukungamu di
        Janji Baik berarti banget buat kami dan <br /> mereka yang terbantu.
      </h1>

      <img
        src="/icons/successpage/berkalabaik.png"
        alt="Terima Kasih"
        className="w-full md:w-80 mb-8"
      />

      <p className="max-w-xl text-base md:text-lg mb-10">
        Yuk, jangan lupa untuk melakukan pembayaran donasi rutinnya tepat waktu,
        supaya kebaikan ini bisa terus berlanjut tanpa jeda. Kami senang bisa
        berjalan bersama kamu dalam cerita kebaikan ini
      </p>
      <div className="w-full flex justify-end pr-8 lg:pr-24 mt-4 mb-12">
        <a
          href="/donasiberkala"
          className="flex items-center gap-2 bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500"
        >
          <img src="./icons/arrowleft.png" alt="Kembali" className="h-5 w-5" />
          <p>Kembali</p>
        </a>
      </div>
    </div>
  );
};

export default SuccessPageBerkalaBaik;
