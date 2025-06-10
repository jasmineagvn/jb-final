import { Link } from "react-router-dom";

function Step3Darurat({ formData, handleChange, prevStep }) {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdJ-2xoMxBPAuYeTESuYn1Glmu-BWiS7JnSwUOAXtsXqw_vmE-nPKTw0voUQNp5doQ/exec';
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.daruratNama || !formData.daruratHubungan || !formData.daruratAlamat || !formData.daruratHp) {
      alert("Mohon lengkapi semua field yang wajib diisi!");
      return;
    }
    
    try {
      const dataToSend = {
        type: 'student',
        ...formData
      };
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', //  Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });
      
      // mode no-cors, kita anggap berhasil jika tidak ada error
      alert("Data berhasil dikirim! Terima kasih telah mendaftar.");
      window.location.href = "/successpagesiswa";
      
    } catch (error) {
      console.error('Error:', error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="lg:w-[928px] w-full mx-auto space-y-[15px]">
      <h2 className="text-xl font-semibold border-b-2 border-black mb-5 pb-4">
        Isi Kontak Darurat dengan Keluarga Terdekat yang Tidak Tinggal Serumah
      </h2>

      <div>
        <label className="block mb-2 font-semibold text-[#12121299]">
          Nama Lengkap<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="daruratNama"
          value={formData.daruratNama || ""}
          onChange={handleChange}
          placeholder="Ketik Nama"
          className="w-full p-3 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#12121299]">
          Hubungan dengan Siswa (Om/Tante, Sepupu, Kakak, dll)
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="daruratHubungan"
          value={formData.daruratHubungan || ""}
          onChange={handleChange}
          placeholder="Ketik Jawaban"
          className="w-full p-3 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#12121299]">
          Alamat Lengkap (Sesuai KTP/KK)<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="daruratAlamat"
          value={formData.daruratAlamat || ""}
          onChange={handleChange}
          placeholder="Ketik Alamat"
          className="w-full p-3 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#12121299]">
          No.HP atau WhatsApp<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="daruratHp"
          value={formData.daruratHp || ""}
          onChange={handleChange}
          placeholder="Ketik No.HP atau WhatsApp"
          className="w-full p-3 border rounded"
          required
        />
      </div>      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition"
        >
          Kembali
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#EC901D] text-white px-6 py-2 w-[161px] rounded-full hover:bg-orange-600 transition"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}

export default Step3Darurat;
