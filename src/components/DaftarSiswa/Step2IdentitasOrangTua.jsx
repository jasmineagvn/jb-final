function Step2IdentitasOrangTua({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="lg:w-[928px] w-full mx-auto">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">
        Identitas Ayah
      </h2>

      <label className="block mb-2 text-[#12121299] font-semibold">
        Nama Lengkap <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahNama"
        value={formData.ayahNama}
        onChange={handleChange}
        placeholder="Ketik Nama"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Agama <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahAgama"
        value={formData.ayahAgama}
        onChange={handleChange}
        placeholder="Ketik Agama"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Pendidikan Terakhir <span className="text-red-600">*</span>
      </label>
      <select
        name="ayahPendidikan"
        value={formData.ayahPendidikan}
        onChange={handleChange}
        className="lg:w-[455px] w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4 text-[#12121299]"
      >
        <option value="">Opsi Pilihan</option>
        <option value="Tidak Sekolah">Tidak Sekolah</option>
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA/SMK">SMA/SMK</option>
        <option value="Diploma">Diploma</option>
        <option value="Sarjana">Sarjana</option>
        <option value="Pascasarjana">Pascasarjana</option>
      </select>

      <label className="block mb-2 text-[#12121299] font-semibold">
        Pekerjaan <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahPekerjaan"
        value={formData.ayahPekerjaan}
        onChange={handleChange}
        placeholder="Ketik Pekerjaan"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Jumlah Penghasilan <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahPenghasilan"
        value={formData.ayahPenghasilan}
        onChange={handleChange}
        placeholder="Ketik Jumlah Penghasilan"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Riwayat Penyakit <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahRiwayatPenyakit"
        value={formData.ayahRiwayatPenyakit}
        onChange={handleChange}
        placeholder="Ketik Riwayat Penyakit"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Alamat Lengkap (Sesuai KTP/KK) <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahAlamat"
        value={formData.ayahAlamat}
        onChange={handleChange}
        placeholder="Ketik Alamat"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        No.HP atau WhatsApp <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ayahHp"
        value={formData.ayahHp}
        onChange={handleChange}
        placeholder="Ketik No.HP atau WhatsApp"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-8 px-5 py-4"
      />

      <h2 className="text-lg font-semibold mb-6 border-b-2 border-black pb-2 mt-20">
        Identitas Ibu
      </h2>

      <label className="block mb-2 text-[#12121299] font-semibold">
        Nama Lengkap <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuNama"
        value={formData.ibuNama}
        onChange={handleChange}
        placeholder="Ketik Nama"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Agama <span className="text-red-600">*</span>
      </label>
      <select
          name="ibuAgama"
          value={formData.ibuAgama}
          onChange={handleChange}
          className="lg:w-[455px] w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4 text-[#12121299]"
          required
        >
          <option value="">Opsi Pilihan</option>
          <option value="Tidak Sekolah">Islam</option>
          <option value="SD">Kristen Protestan</option>
          <option value="SMP">Katolik</option>
          <option value="SMA/SMK">Hindu</option>
          <option value="Diploma">Buddha</option>
          <option value="Sarjana">KongHucu</option>
          <option value="Pascasarjana">Lainnya</option>
        </select>

      <label className="block mb-2 mt-4 text-[#12121299] font-semibold">
        Pendidikan Terakhir <span className="text-red-600">*</span>
      </label>
      <select
        name="ibuPendidikan"
        value={formData.ibuPendidikan}
        onChange={handleChange}
        className="lg:w-[455px] w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4 text-[#12121299]"
        required
      >
        <option value="">Opsi Pilihan</option>
        <option value="Tidak Sekolah">Tidak Sekolah</option>
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA/SMK">SMA/SMK</option>
        <option value="Diploma">Diploma</option>
        <option value="Sarjana">Sarjana</option>
        <option value="Pascasarjana">Pascasarjana</option>
      </select>

      <label className="block mb-2 text-[#12121299] font-semibold">
        Pekerjaan <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuPekerjaan"
        value={formData.ibuPekerjaan}
        onChange={handleChange}
        placeholder="Ketik Pekerjaan"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Jumlah Penghasilan <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuPenghasilan"
        value={formData.ibuPenghasilan}
        onChange={handleChange}
        placeholder="Ketik Jumlah Penghasilan"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Riwayat Penyakit <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuRiwayatPenyakit"
        value={formData.ibuRiwayatPenyakit}
        onChange={handleChange}
        placeholder="Ketik Riwayat Penyakit"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        Alamat Lengkap (Sesuai KTP/KK) <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuAlamat"
        value={formData.ibuAlamat}
        onChange={handleChange}
        placeholder="Ketik Alamat"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2 text-[#12121299] font-semibold">
        No.HP atau WhatsApp <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuHp"
        value={formData.ibuHp}
        onChange={handleChange}
        placeholder="Ketik No.HP atau WhatsApp"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-8 px-5 py-4"
        required
      />

      <h2 className="text-lg font-semibold mb-6 border-b-2 border-black pb-2 mt-20">
        Identitas Wali
      </h2>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Nama Lengkap <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliNama"
          value={formData.waliNama}
          onChange={handleChange}
          placeholder="Ketik Nama"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Agama <span className="text-red-600">*</span>
        </label>
        <select
          name="waliAgama"
          value={formData.waliAgama}
          onChange={handleChange}
          className="lg:w-[455px] w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4 text-[#12121299]"
          required
        >
          <option value="">Opsi Pilihan</option>
          <option value="Tidak Sekolah">Islam</option>
          <option value="SD">Kristen Protestan</option>
          <option value="SMP">Katolik</option>
          <option value="SMA/SMK">Hindu</option>
          <option value="Diploma">Buddha</option>
          <option value="Sarjana">KongHucu</option>
          <option value="Pascasarjana">Lainnya</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Pendidikan Terakhir <span className="text-red-600">*</span>
        </label>
        <select
          name="waliPendidikan"
          value={formData.waliPendidikan}
          onChange={handleChange}
          className="lg:w-[455px] w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4 text-[#12121299]"
          required
        >
          <option value="">Opsi Pilihan</option>
          <option value="Tidak Sekolah">Tidak Sekolah</option>
          <option value="SD">SD</option>
          <option value="SMP">SMP</option>
          <option value="SMA/SMK">SMA/SMK</option>
          <option value="Diploma">Diploma</option>
          <option value="Sarjana">Sarjana</option>
          <option value="Pascasarjana">Pascasarjana</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Pekerjaan <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliPekerjaan"
          value={formData.waliPekerjaan}
          onChange={handleChange}
          placeholder="Ketik Pekerjaan"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Jumlah Penghasilan <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliPenghasilan"
          value={formData.waliPenghasilan}
          onChange={handleChange}
          placeholder="Ketik Jumlah Penghasilan"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Riwayat Penyakit <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliRiwayatPenyakit"
          value={formData.waliRiwayatPenyakit}
          onChange={handleChange}
          placeholder="Ketik Riwayat Penyakit"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-[#12121299] font-semibold">
          Alamat Lengkap (Sesuai KTP/KK) <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliAlamat"
          value={formData.waliAlamat}
          onChange={handleChange}
          placeholder="Ketik Alamat"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-[#12121299] font-semibold">
          No.HP atau WhatsApp <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliHp"
          value={formData.waliHp}
          onChange={handleChange}
          placeholder="Ketik No.HP atau WhatsApp"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition"
        >
          Kembali
        </button>
        <button
          onClick={nextStep}
          className="bg-[#EC901D] hover:bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

export default Step2IdentitasOrangTua;
