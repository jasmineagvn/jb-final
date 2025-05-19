export default function Scan() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-[35px] lg:text-4xl leading-tight font-bold text-center mb-4">
        Janji Mereka Butuh Uluranmu
      </h1>
      <p className="text-gray-500 w-full lg:w-[600px] text-center mb-1 text-[16px]">
        Bantu anak-anak kembali sekolah dan tumbuh jadi pribadi penuh kebaikan.
        Scan QR untuk berdonasi — karena sekecil apa pun uluranmu, sangat
        berarti bagi kami.
      </p>
      <div className="p-4 rounded-lg mb-12">
        <div className="bg-white p-4 rounded-lg">
          <img
            src="/icons/QRIS.png"
            alt="QRIS Janji Baik"
            className="w-full lg:w-[399.73px] h-full lg:h-[526px] mx-auto"
          />
        </div>

        <p className=" text-center mb-2">
          Terima kasih sudah berbagi dan percaya pada Janji Baik.
        </p>

        <a
          href="/"
          className="absolute right-8 lg:right-24 flex items-center gap-2 lg:mt-0 mt-8 bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500"
        >
          <img src="./icons/arrowleft.png" alt="Kembali" className="h-5 w-5" />
          <p>Kembali</p>
        </a>
      </div>
    </div>
  );
}
