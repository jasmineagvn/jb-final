import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormRelawan = () => {
  // Tambahkan state untuk menyimpan data form
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      label: "Nama Lengkap",
      name: "namaLengkap",
      type: "text",
      required: true,
      placeholder: "Ketik Nama",
    },
    {
      label: "Nama Panggilan",
      name: "namaPanggilan",
      type: "text",
      required: true,
      placeholder: "Ketik Nama Panggilan",
    },
    {
      label: "Tempat Lahir",
      name: "tempatLahir",
      type: "text",
      required: true,
      placeholder: "Ketik Tempat Lahir",
    },
    {
      label: "Tanggal Lahir",
      name: "tanggalLahir",
      type: "date",
      required: true,
    },
    {
      label: "No HP atau WhatsApp",
      name: "noHp",
      type: "text",
      required: true,
      placeholder: "Ketik No.Hp / WhatsApp",
    },
    {
      label: "Alamat Lengkap (Sesuai KTP/KK)",
      name: "alamat",
      type: "text",
      required: true,
      placeholder: "Ketik Alamat",
    },
    {
      label: "Divisi yang Dipilih",
      name: "divisi",
      type: "select",
      options: [
        "Canvas Think",
        "Human Responsibility",
        "Creative Seeker",
        "Tutor & CareTaker",
        "Growth Maker",
        "Student Glory",
        "Digital Heroes",
        "Counselor",
      ],
      required: true,
    },
    {
      label: "Sosial Media",
      name: "sosialMedia",
      type: "text",
      placeholder: "Ketik Sosial Media",
    },
    {
      label: "Riwayat Pendidikan dan Jurusan",
      name: "riwayatPendidikan",
      type: "text",
      required: true,
      placeholder: "Ketik Riwayat Pendidikan & Jurusan",
    },
    {
      label: "Mengapa Anda Tertarik Menjadi Relawan?",
      name: "alasan",
      type: "textarea",
      required: true,
      placeholder: "Ketik Alasan",
    },
    {
      label: "Pengalaman Apa yang Anda Miliki di Dunia Kerelawanan?",
      name: "pengalaman",
      type: "textarea",
      required: true,
      placeholder: "Ketik Pengalaman",
    },
    {
      label: "Deskripsikan Posisi atau Tanggung Jawab Anda di Lembaga Tersebut",
      name: "deskripsiPosisi",
      type: "textarea",
      required: true,
      placeholder: "Ketik Posisi",
    },
    {
      label: "Kesibukan Saat Ini",
      name: "kesibukan",
      type: "text",
      required: true,
      placeholder: "Ketik Kesibukan",
    },
    {
      label: "Kritik dan Saran Pengembangan untuk Sekolah Janji Baik",
      name: "kritikSaran",
      type: "textarea",
      placeholder: "Ketik Kritik dan Saran",
    },
  ];

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdJ-2xoMxBPAuYeTESuYn1Glmu-BWiS7JnSwUOAXtsXqw_vmE-nPKTw0voUQNp5doQ/exec';
  
  // handler untuk mengupdate formData ketika input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.namaLengkap || !formData.namaPanggilan || !formData.tempatLahir || 
        !formData.tanggalLahir || !formData.noHp || !formData.alamat || 
        !formData.divisi || !formData.riwayatPendidikan || !formData.alasan || 
        !formData.pengalaman || !formData.deskripsiPosisi || !formData.kesibukan) {
      alert("Mohon lengkapi semua field yang wajib diisi!");
      return;
    }
    
    try {
      const dataToSend = {
        type: 'volunteer',
        ...formData
      };
      
      console.log('Sending volunteer data:', dataToSend);
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });
      
      alert("Data relawan berhasil dikirim! Terima kasih telah bergabung.");
      window.location.href = "/successpage";
      
    } catch (error) {
      console.error('Error:', error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center my-8 text-[32px] font-bold text-[#01B4BB]">
        Daftar Menjadi Relawan
      </h1>

      <div className="border-b-2 border-black mb-20">
        <h1 className="text-xl font-semibold mb-6">
          Form Pendaftaran Relawan Janji Baik
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[928px] mx-auto space-y-8"
      >
        {formFields.map((field, index) => (
          <div key={index}>
            <label className="block text-[#12121299] font-semibold mb-4">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full h-[56px] border-2 rounded-[12px] p-2"
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                className="w-[455px] h-[56px] border-2 rounded-[12px] p-2 text-[#72717B]"
              >
                <option value="">Opsi Pilihan</option>
                {field.options.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className={`h-[56px] border-2 rounded-[12px] p-2 ${
                  field.name === "tanggalLahir" ? "w-[425px] text-[#12121299]" : "w-full"
                }`}
              />
            )}
          </div>
        ))}

        <div className="text-right">
          <button 
            type="submit"
            className="bg-[#EC901D] text-white px-6 py-2 w-[161px] rounded-full hover:bg-orange-600 transition cursor-pointer"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRelawan;