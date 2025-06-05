function Step3Darurat({ formData, handleChange, handleSubmit }) {
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
      </div>

      <div className="flex justify-end">
        <Link to="/successpagesiswa">
            <button className="bg-[#EC901D] text-white px-6 py-2 w-[161px] rounded-full hover:bg-orange-600 transition">
              Kirim
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Step3Darurat;
