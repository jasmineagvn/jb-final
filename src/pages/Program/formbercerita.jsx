import React, { useState } from "react";
import { Link } from "react-router";

export default function FormBercerita() {
  const [form, setForm] = useState({
    nama: "",
    jenisKelamin: "",
    umur: "",
    whatsapp: "",
    status: "",
    sesi: "",
    alasan: "",
    pilihanKonseling: "",
    media: "",
    cerita: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Kirim data ke backend di sini
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center my-8 text-[32px] font-bold text-[#01B4BB] mb-20">
        Daftar Janji Baik Bercerita
      </h1>

      <div className="border-b-3 border-black mb-10">
        <h1 className="text-xl font-bold mb-6">
          Form Pendaftaran Janji Baik Bercerita
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-4 radius-[12px]">
          <FormInput
            label="Nama (Sesuai KTP)"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
          />
          <FormSelect
            label="Jenis Kelamin"
            name="jenisKelamin"
            value={form.jenisKelamin}
            onChange={handleChange}
            options={["Laki-laki", "Perempuan"]}
            required
          />
          <FormInput
            label="Umur"
            name="umur"
            value={form.umur}
            onChange={handleChange}
            required
          />
          <FormInput
            label="No HP atau WhatsApp"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            required
          />
          <FormSelect
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Pelajar", "Mahasiswa", "Pekerja", "Lainnya"]}
            required
          />

          <div>
            <label className="block font-semibold text-sm text-[#12121299] mb-2">
              Sesi Bercerita<span className="text-red-500">*</span>
            </label>
            <div className="space-y-1">
              <label className="inline-flex items-center text-[#12121299]">
                <input
                  type="radio"
                  name="sesi"
                  value="Online"
                  checked={form.sesi === "Online"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Online
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center text-[#12121299]">
                  <input
                    type="radio"
                    name="sesi"
                    value="Offline"
                    checked={form.sesi === "Offline"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Offline
                </label>
              </div>
            </div>
          </div>

          <FormInput
            label="Alasan mendaftar Janji Baik Bercerita secara singkat"
            name="alasan"
            value={form.alasan}
            onChange={handleChange}
            required
          />
          <FormSelect
            label="Pilih Sesi Konseling"
            name="pilihanKonseling"
            value={form.pilihanKonseling}
            onChange={handleChange}
            options={[
              "Keluarga",
              "Percintaan",
              "Pendidikan",
              "Kesehatan Mental",
              "Lainnya",
            ]}
            required
          />

          <div>
            <label className="block font-semibold text-sm text-[#12121299] mb-2">
              Media yang Dipilih (Online)<span className="text-red-500">*</span>
            </label>
            <label className="inline-flex items-center mr-4 text-[#12121299]">
              <input
                type="radio"
                name="media"
                value="WhatsApp"
                checked={form.media === "WhatsApp"}
                onChange={handleChange}
                className="mr-2 "
              />
              WhatsApp
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center text-[#12121299]">
                <input
                  type="radio"
                  name="media"
                  value="Google Meet"
                  checked={form.media === "Google Meet"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Google Meet
              </label>
            </div>
          </div>

          <FormTextarea
            label="Ceritakan secara singkat latar belakang cerita yang ingin kamu bagikan"
            name="cerita"
            value={form.cerita}
            onChange={handleChange}
          />

          <div className="text-right">
            <Link to="/successpagebercerita">
              <button className="bg-[#EC901D] text-white px-6 py-2 w-[161px] rounded-full hover:bg-orange-600 transition">
                Kirim
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormInput({ label, name, value, onChange, required = false }) {
  return (
    <div>
      <label className="block font-semibold text-sm text-[#12121299] mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-[12px] p-2 mt-2 h-[56px]"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label className="block font-semibold text-sm text-[#12121299] mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-[480px] border border-gray-300 rounded-[12px] p-2 mt-2 h-[56px]"
      >
        <option value="">Opsi Pilihan</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block font-semibold text-sm text-[#12121299] mb-1">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full border border-gray-300 rounded-[12px] p-2 mt-2"
      />
    </div>
  );
}
