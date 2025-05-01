import React from "react";

export default function DaftarSiswa() {
  return (
    <div className="min-h-screen bg-white py-10 px-20 flex flex-col">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">
          Ingin Menjadi Bagian dari Sekolah Janji Baik?
        </h1>
        <p className="text-gray-600">
          Di Janji Baik kamu gak cuma bisa jadi siswa aja loh. Kamu bisa gabung ke OSIS ataupun organisasi lainnya. Yuk, siapkan langkahmu untuk masa depan yang lebih cerah! Sebelum mendaftar, pastikan kamu membaca syarat dan ketentuannya terlebih dahulu.
        </p>
      </div>

      <div className="bg-[#E7F6F7] p-8 mt-10 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="font-bold text-xl mb-4">Syarat & <br />Ketentuan</h2>
        <hr className="border-t-4 border-black mb-4" />
        <ul className="list-none space-y-4">
          {[
            "Foto Siswa background warna merah ukuran 2x3 : 2 lembar",
            "Ijazah Terakhir (Asli) beserta fotokopi : 2 lembar",
            "Fotokopi Akte kelahiran : 2 lembar",
            "Fotokopi Kartu keluarga (KK) terbaru tanda tangan barcode : 2 lembar",
            "Fotokopi Rapor sekolah kelas terakhir : 2 rangkap",
            "Fotokopi KTP orang tua/wali : masing-masing 1 lembar",
            "Surat keterangan tidak mampu dari Kelurahan : 1 lembar",
            "Foto Rekening listrik bulan terakhir : 1 lembar",
            "Foto Rumah (tampak depan, ruang keluarga dan dapur)",
            "Untuk Siswa di luar Jabodetabek dan Banten, persyaratan berupa dokumen asli dapat dikirimkan melalui foto ke WA Admin Janji Baik"
          ].map((item, index) => (
            <li key={index} className="flex text-[#72717B] items-start gap-2">
              <span className="text-orange-400">⭐</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

        <div className="bg-[#01B4BB] p-8 rounded-[55px] mt-10 text-center max-w-2xl w-full">
            <h2 className="text-white text-lg font-semibold mb-4">
            Tertarik Jadi Siswa Hebat yang Janji Gak Cuma Cerdas, Tapi Juga Baik? Yuk, Klik Daftar Sekarang!
            </h2>
            <button className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 rounded-full transition">
            <link rel="stylesheet" href="./daftarsiswa/formsiswa" />Daftar Siswa Sekarang
            </button>
        </div>
    </div>
  );
}