import { useState } from "react";
import Stepper from "@/components/Stepper";
import Step1DataDiri from "@/components/DaftarSiswa/Step1DataDiri";
import Step2IdentitasOrangTua from "@/components/DaftarSiswa/Step2IdentitasOrangTua";
import Step3Darurat from "@/components/DaftarSiswa/Step3Darurat";

function FormPendaftaran() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Data Diri
    nama: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    umur: "",
    nik: "",
    tingkat: "",
    kelas: "",
    kelasTerakhir: "",
    statusKeluarga: "",
    alamatLengkap: "",
    statusTempatTinggal: "",
    kwhListrik: "",
    riwayatPenyakit: "",
    alasanSekolah: "",

    // Identitas Orang Tua
    ibuNama: "",
    ibuAgama: "",
    ibuPendidikan: "",
    ibuPekerjaan: "",
    ibuPenghasilan: "",
    ibuRiwayatPenyakit: "",
    ibuAlamat: "",
    ibuHp: "",
    waliNama: "",
    waliAgama: "",
    waliPendidikan: "",
    waliPekerjaan: "",
    waliPenghasilan: "",
    waliRiwayatPenyakit: "",
    waliAlamat: "",
    waliHp: "",

    // Kontak Darurat
    daruratNama: "",
    daruratHubungan: "",
    daruratAlamat: "",
    daruratHp: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center my-8 text-[32px] font-semibold text-[#01B4BB]">
        Daftar Menjadi Siswa
      </h1>

      <div className="border-b-2 border-black mb-20">
        <h1 className="text-xl font-semibold mb-6">
          Form Pendaftaran Siswa Janji Baik
        </h1>
      </div>

      <Stepper currentStep={step} />

      {step === 1 && (
        <Step1DataDiri
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2IdentitasOrangTua
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3Darurat
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )}
    </div>
  );
}

export default FormPendaftaran;
