function Step2IdentitasOrangTua({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="w-[928px] mx-auto">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-black pb-2">
        Identitas Ayah
      </h2>

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
        Pendidikan Terakhir <span className="text-red-600">*</span>
      </label>
      <select
        name="ayahPendidikan"
        value={formData.ayahPendidikan}
        onChange={handleChange}
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
        Agama <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="ibuAgama"
        value={formData.ibuAgama}
        onChange={handleChange}
        placeholder="Ketik Agama"
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        required
      />

      <label className="block mb-2">
        Pendidikan Terakhir <span className="text-red-600">*</span>
      </label>
      <select
        name="ibuPendidikan"
        value={formData.ibuPendidikan}
        onChange={handleChange}
        className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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

      <label className="block mb-2">
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
        <label className="block mb-2">
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
        <label className="block mb-2">
          Agama <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="waliAgama"
          value={formData.waliAgama}
          onChange={handleChange}
          placeholder="Ketik Agama"
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Pendidikan Terakhir <span className="text-red-600">*</span>
        </label>
        <select
          name="waliPendidikan"
          value={formData.waliPendidikan}
          onChange={handleChange}
          className="w-full border border-gray-500 p-2 rounded-[12px] px-5 py-4"
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
        <label className="block mb-2">
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
        <label className="block mb-2">
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
        <label className="block mb-2">
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
        <label className="block mb-2">
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
        <label className="block mb-2">
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

      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="bg-orange-500 text-white px-6 py-2 rounded-full"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

export default Step2IdentitasOrangTua;
