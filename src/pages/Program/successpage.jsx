import React from "react";

const SuccessPageBercerita = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-20">
        Yeay! Ceritamu sudah ditunggu - tunggu di Janji Baik <br /> Bercerita,
        Kami senang sekali kamu sudah bergabung. <br /> Tunggu Balasan dari Kami
        ya!
      </h1>

      <img
        src="/icons/successpage/jbbercerita.png"
        alt="Terima Kasih"
        className="w-[650px] md:w-80 mb-8"
      />

      <p className="w-[914px] text-base md:text-lg mb-10">
        Terima kasih karena sudah berani mengambil langkah pertama untuk mulai
        bercerita. <br /> Yuk, kita ciptakan ruang cerita yang hangat dan penuh
        kebaikan bersama!
      </p>
      <div className="w-full flex justify-end pr-8 lg:pr-24 mt-4 mb-12">
        <a
          href="/jbbercerita"
          className="flex items-center gap-2 bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500"
        >
          <img src="./icons/arrowleft.png" alt="Kembali" className="h-5 w-5" />
          <p>Kembali</p>
        </a>
      </div>
    </div>
  );
};

export default SuccessPageBercerita;
