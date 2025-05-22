const Step1DataDiri = ({ formData, handleChange, nextStep }) => (
  <div className="w-[928px] mx-auto">
    <label className="block mb-2">
      Nama Lengkap <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="nama"
      value={formData.nama}
      onChange={handleChange}
      placeholder="Ketik Nama"
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <label className="block mb-2">
      Jenis Kelamin <span className="text-red-600">*</span>
    </label>
    <select
      name="jenisKelamin"
      value={formData.jenisKelamin}
      onChange={handleChange}
      className="border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4 w-[455px]"
    >
      <option value="">Opsi Pilihan</option>
      <option value="Laki-laki">Laki-laki</option>
      <option value="Perempuan">Perempuan</option>
    </select>

    <label className="block mb-2">
      Tempat Lahir <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="tempatLahir"
      value={formData.tempatLahir}
      onChange={handleChange}
      placeholder="Ketik Tempat Lahir"
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block mb-2">
          Tanggal Lahir <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleChange}
          className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        />
      </div>
      <div className="flex-1">
        <label className="block mb-2">
          Umur <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="umur"
          value={formData.umur}
          onChange={handleChange}
          className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
        />
      </div>
    </div>

    <label className="block mb-2">
      NIK (Apabila Belum mempunyai KTP bisa dilihat di Kartu Keluarga){" "}
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="nik"
      value={formData.nik}
      onChange={handleChange}
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <label className="block mb-2">Tingkatan yang Dituju *</label>
    <div className="mb-4 flex flex-col gap-4">
      {[
        "Paket A (Setara SD)",
        "Paket B (Setara SMP)",
        "Paket C (Setara SMA)",
      ].map((item, index) => (
        <label key={index} className="block">
          <input
            type="radio"
            name="tingkat"
            value={item}
            checked={formData.tingkat === item}
            onChange={handleChange}
            className="mr-2"
          />
          {item}
        </label>
      ))}
    </div>

    <label className="block mb-2">
      Kelas yang Dituju <span className="text-red-500">*</span>
    </label>
    <select
      name="kelas"
      value={formData.kelas}
      onChange={handleChange}
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    >
      <option value="">Opsi Pilihan</option>
      <option value="Kelas 1">Kelas 1</option>
      <option value="Kelas 2">Kelas 2</option>
      <option value="Kelas 3">Kelas 3</option>
    </select>

    <label className="block mb-2">
      Kelas/Tingkatan Terakhir (sesuai rapor terakhir yang dimiliki){" "}
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="kelasTerakhir"
      value={formData.kelasTerakhir}
      onChange={handleChange}
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <div className="mb-4">
      <label className="block mb-2">
        Status dalam Keluarga <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col gap-4 ">
        {["Anak Kandung", "Anak Angkat", "Anak Sambung/Tiri"].map((opt) => (
          <div key={opt}>
            <input
              type="radio"
              name="statusKeluarga"
              value={opt}
              checked={formData.statusKeluarga === opt}
              onChange={handleChange}
            />
            <label className="ml-2">{opt}</label>
          </div>
        ))}
      </div>
    </div>

    <label className="block mb-2">
      Alamat Lengkap (sesuai KTP/KK) <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="alamat"
      value={formData.alamat}
      onChange={handleChange}
      placeholder="Ketik Alamat"
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <label className="block mb-2">
      Status Tempat Tinggal <span className="text-red-600">*</span>
    </label>
    <div className="mb-4 flex flex-col gap-2">
      {["Sewa", "Milik Pribadi", "Tinggal dengan Saudara"].map((item, idx) => (
        <label key={idx} className="block">
          <input
            type="radio"
            name="statusTinggal"
            value={item}
            checked={formData.statusTinggal === item}
            onChange={handleChange}
            className="mr-2"
          />
          {item}
        </label>
      ))}
    </div>

    <label className="block mb-2">
      Berapa KWH Listrik <span className="text-red-600">*</span>
    </label>
    <div className="mb-4 flex flex-col gap-2">
      {["450", "900", "1300", "2200", "3500 ke atas"].map((item, idx) => (
        <label key={idx} className="block">
          <input
            type="radio"
            name="kwh"
            value={item}
            checked={formData.kwh === item}
            onChange={handleChange}
            className="mr-2"
          />
          {item}
        </label>
      ))}
    </div>

    <label className="block mb-2">
      Riwayat Penyakit (isi tanda "-" jika tidak ada){" "}
      <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="riwayatPenyakit"
      value={formData.riwayatPenyakit}
      onChange={handleChange}
      placeholder="Ketik Riwayat Penyakit"
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-4 px-5 py-4"
    />

    <label className="block mb-2">
      Alasan Melanjutkan Sekolah <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      name="alasanSekolah"
      value={formData.alasanSekolah}
      onChange={handleChange}
      placeholder="Ketik Alasan Anda"
      className="w-full border border-gray-500 p-2 rounded-[12px] mb-8 px-5 py-4"
    />

    <div className="flex justify-end">
      <button
        onClick={nextStep}
        className="bg-[#EC901D] text-white px-6 py-2 rounded-full"
      >
        Selanjutnya
      </button>
    </div>
  </div>
);

export default Step1DataDiri;
