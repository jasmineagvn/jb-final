import React from "react";

export default function DonasiUmum() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-[35px] md:text-4xl font-bold text-center mb-4">
        Janji Mereka Butuh Uluranmu
      </h1>
      <p className="text-gray-500 text-center mb-1 text-[16px]">
        Bantu anak-anak kembali sekolah dan tumbuh jadi pribadi penuh kebaikan.
      </p>
      <p className="text-gray-500 text-center text-[16px]">
        Scan QR untuk berdonasi — karena sekecil apa pun uluranmu, sangat
        berarti bagi kami.
      </p>

      <div className="p-4 rounded-lg mb-2">
        <div className="bg-white p-4 rounded-lg">
          <img
            src="./icons/QRIS.png"
            alt="QRIS Janji Baik"
            className="w-[399.73px] h-[526px] mx-auto"
          />
        </div>

        <p className=" text-center mb-2">
            Terima kasih sudah berbagi dan percaya pada Janji Baik.
        </p>

         <button className="absolute right-24 flex items-center gap-2 bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500">
            <img
                src="./icons/arrowleft.png" 
                alt="Kembali"
                className="h-5 w-5"
            />
            <a href="/">Kembali</a>
        </button>
      </div>
    </div>
  );
}
