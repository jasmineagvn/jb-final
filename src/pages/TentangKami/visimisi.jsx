import React from "react";

function VisiMisi() {
  return (
    <div className="relative">
      <img
        src="/icons/titik.png"
        alt=""
        className="w-[200px] h-[200px] absolute"
      />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 relative top-[135px] items-start">
        {/* Gambar visimisi */}
        <div className="w-full md:w-[500px] px-5 md:px-0">
          <img
            src="/icons/visimisitk.png"
            alt=""
            className="w-full rounded-[40px]"
          />
        </div>

        {/* Teks visi misi */}
        <div className="flex flex-col gap-10 w-full md:w-[555px] px-5 md:px-0">
          <div className="flex flex-col gap-5 text-end">
            <h1 className="text-2xl text-[#01B4BB]">Visi Janji Baik</h1>
            <p className="text-sm lg:text-base text-[#72717B]">
              Sebagai lembaga kepedulian dalam bidang pendidikan yang dapat
              membantu setiap anak mendapatkan haknya dalam Pendidikan,
              meningkatkan integritas dan keterampilan literasi digital.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-end">
            <h1 className="text-2xl text-[#01B4BB]">Misi Janji Baik</h1>
            <div className="flex flex-col gap-3">
              <MisiList>
                <h1 className="text-sm lg:text-base text-[#72717B]">
                  Menjangkau anak-anak putus sekolah dari keluarga Prasejahtera
                  untuk mendapatkan hak Pendidikan melalui jalur Pendidikan
                  nonformal (Pendidikan Kesetaraan).
                </h1>
              </MisiList>
              <MisiList>
                <h1 className="text-sm lg:text-base text-[#72717B]">
                  Memberikan pemahaman kepada masyarakat akan pentingnya
                  pendidikan dan memperkecil Jarak (Gap)kesenjangan digital
                  melalui Pendidikan literasi digital.
                </h1>
              </MisiList>
              <MisiList>
                <h1 className="text-sm lg:text-base text-[#72717B]">
                  Membentuk peserta didik menjadi manusia pembelajar seumur
                  hidup (Long Life Education) yang mempunyaiintegritas melalui
                  program pengembangan diri dan keterampilan bagi peserta didik.
                </h1>
              </MisiList>
              <MisiList>
                <h1 className="text-sm lg:text-base text-[#72717B]">
                  Bekerja sama dengan pemerintah, lembaga swasta maupun
                  masyarakat dalam pelaksanaan pembelajaran.
                </h1>
              </MisiList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MisiList = ({ children }) => {
  return (
    <div className="flex gap-3 items-center">
      {children}
      <img src="/icons/checklist2.png" alt="" className="w-4 h-4lg:w-5 lg:h-5" />
    </div>
  );
};

export default VisiMisi;
