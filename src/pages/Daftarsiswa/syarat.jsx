const syaratData = [
  "Foto Siswa background warna merah ukuran 2x3 : 2 lembar",
  "Foto Siswa background warna merah ukuran 3x4 : 2 lembar",
  "Ijazah Terakhir (Asli) beserta fotokopi : 2 lembar",
  "Fotokopi Akte kelahiran : 2 lembar",
  "Fotokopi Kartu keluarga (KK) terbaru tanda tangan barcode : 2 lembar",
  "Fotokopi Rapor sekolah kelas terakhir : 2 rangkap",
  "Fotokopi KTP orang tua/wali : masing-masing 1 lembar",
  "Surat keterangan tidak mampu dari Kelurahan : 1 lembar",
  "Foto Rekening listrik bulan terakhir : 1 lembar",
  "Foto Rumah (tampak depan, ruang keluarga dan dapur)",
  "Untuk Siswa di luar Jabodetabek dan Banten, persyaratan berupa dokumen asli dapat dikirimkan melalui foto ke WA Admin Janji Baik",
];

const DaftarSiswa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-[35px] sm:text-3xl font-bold mb-2">
          Ingin Menjadi Bagian dari Sekolah Janji Baik?
        </h2>
        <p className="text-[#72717B] text-base lg:text-[18px] mt-4">
          Di Janji Baik kamu gak cuma bisa jadi siswa aja loh. Kamu bisa gabung
          ke OSIS ataupun organisasi lainnya.
          <br />
          Yuk, siapkan langkahmu untuk masa depan yang lebih cerah! Sebelum
          mendaftar, <br /> pastikan kamu membaca syarat dan ketentuannya
          terlebih dahulu.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="bg-[#E7F6F7] rounded-xl p-6 shadow-xl w-[757px] h-[780px]">
          <h3 className="text-lg font-bold mb-4">
            Syarat & <br /> Ketentuan
          </h3>
          <div className="border-t-4 border-black w-full mb-4n"></div>
          <ul className="space-y-3">
            {syaratData.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700 p-2 mt-4">
                <img
                  src="/icons/check.png"
                  alt="icon"
                  className="w-5 h-5 mt-1 mr-2"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <img
            src="/icons/kartundaftarsiswa.png"
            alt="Anak-anak Janji Baik"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 w-full lg:w-[900px] h-full lg:h-[230px] bg-[#01B4BB] rounded-[55px] text-white text-center py-12">
          <p className="font-semibold text-lg lg:text-[24px] mb-2 px-3">
            Tertarik Jadi Siswa Hebat yang Janji Gak Cuma Cerdas, Tapi Juga
            Baik?
          </p>
          <p className="mb-4 text-base lg:text-[24px] font-bold">
            Yuk, Klik Daftar Sekarang!
          </p>
          <button className="bg-orange-400 text-sm lg:text-base hover:bg-orange-500 text-white px-6 py-2 rounded-full">
            Daftar Siswa Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaftarSiswa;
