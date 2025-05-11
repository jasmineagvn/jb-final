import React from 'react';

const FormKolaborasi = () => {
  return (
    <div className="min-h-screen px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-[#E7F6F7] p-5  md:p-14 lg:p-20 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Form Berkolaborasi</h2>
        <p className="text-center text-sm text-gray-700 mb-10">
          Isi formulir di bawah ini, dan tim kami akan segera menghubungi Anda untuk membahas peluang<br /> kolaborasi lebih lanjut.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Alamat Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Ketik Email"
              className="bg-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ketik Nama Lengkap"
              className="bg-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Nama Lembaga/Komunitas <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ketik Nama Lembaga/Komunitas"
              className="bg-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              No. HP / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Ketik No. HP / WhatsApp"
              className="bg-white w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Jenis Kolaborasi yang Diinginkan<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ketik Jenis Kolaborasi"
              className="bg-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Deskripsi Kolaborasi
            </label>
            <input
              type="text"
              placeholder="Ketik Deskripsi Kolaborasi"
              className="bg-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#72717B]">
              Pesan Tambahan/Pertanyaan <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Ketik Pesan"
              className="bg-white w-full h-[194px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#EC901D] hover:bg-orange-600 text-white px-6 py-2 rounded-full w-[127px]"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormKolaborasi;