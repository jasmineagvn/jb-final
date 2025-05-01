export default function Undang () {
    return (
      <section className="text-center px-4">
        <p className="text-sm text-[#01B4BB] font-medium mb-1">Undang-Undang</p>
        <p className="max-w-2xl mx-auto text-[#72717B] text-sm md:text-base mb-10">
          Undang-undang No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional
          (SISDIKNAS) mengakomodasi Pendidikan Non Formal (di bawah Payung PKBM)
          memperoleh ijazah kesetaraan yang dikeluarkan oleh KEMENDIKBUDRISTEK.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <div className="flex items-center gap-2 border border-orange-400 text-orange-500 px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <MisiList>
                  <h2 className="text-[#EC901D] font-semibold">Paket A Setara SD (Sekolah Dasar)</h2>
              </MisiList>
          </div>
  
          <div className="flex items-center gap-2 border border-orange-400 text-orange-500 px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <MisiList>
                  <h2 className="text-[#EC901D] font-semibold">Paket A Setara SD (Sekolah Dasar)</h2>
              </MisiList>
          </div>
  
          <div className="flex items-center gap-2 border border-orange-400 text-orange-500 px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <MisiList>
                  <h2 className="text-[#EC901D] font-semibold">Paket A Setara SD (Sekolah Dasar)</h2>
              </MisiList>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          Ijazah yang didapat melalui hasil belajar dapat digunakan untuk melanjutkan <br />
          tingkatan sekolah lainnya dan Universitas.
        </p>
      </section>
    );
  };
  
  const MisiList = ({ children }) => {
      return (
        <div className="flex items-start justify-end text-right gap-6">
          <img src="./public/icons/checklist2.png" alt="Checklist" className="w-5 h-5 mt-1" />
          <p className="text-[15px] text-[#72717B] leading-relaxed tracking-[-0.2px]">
            {children}
          </p>
        </div>
      );
    };
  