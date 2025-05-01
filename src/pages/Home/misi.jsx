import Button from "@/components/Button";

function Misi() {
  return (
    <div className="max-w-6xl mx-auto mt-[150px]">
      <div className="flex justify-between items-center px-4 md:px-0">
        <div className="flex flex-col gap-y-8 w-full md:w-[50%]">
          <header className="flex flex-col gap-y-2 w-full md:w-[550px]">
            <p className="text-teal-500 font-bold tracking-[-0.7px]">
              Tentang Sekolah Janji Baik
            </p>
            <h1 className="text-black dark:text-white text-4xl font-semibold  tracking-[-0.7px] leading-tight">
              Pendidikan untuk Semua, Masa Depan yang Lebih Baik
            </h1>
          </header>

          <p className="text-[#72717B] dark:text-gray-400 w-full md:w-[496px]  leading-relaxed tracking-[-0.7px]">
            Sekolah Janji Baik adalah sekolah non-profit yang menyediakan
            pendidikan gratis bagi anak-anak kurang mampu di Indonesia. Berdiri
            sejak 2020, kami hadir untuk menjembatani kesenjangan pendidikan dan
            memberikan kesempatan belajar yang layak bagi setiap anak.
          </p>

          <div className="flex flex-col gap-y-8">
            <h1 className="text-black dark:text-white text-3xl font-medium">Misi Kami</h1>

            <div className="flex flex-col gap-y-4">
              <MisiList>
                Menjangkau anak-anak putus sekolah dari keluarga Prasejahtera
                untuk mendapatkan hak Pendidikan melalui jalur Pendidikan
                nonformal (Pendidikan Kesetaraan).
              </MisiList>
              <MisiList>
                Memberikan pemahaman kepada masyarakat akan pentingnya
                pendidikan dan memperkecil Jarak (Gap)kesenjangan digital
                melalui Pendidikan literasi digital.
              </MisiList>
              <MisiList>
                Membentuk peserta didik menjadi manusia pembelajar seumur hidup
                (Long Life Education) yang mempunyaiintegritas melalui program
                pengembangan diri dan keterampilan bagi peserta didik.
              </MisiList>
            </div>
          </div>

          <Button variant="md:w-[510px] w-full">Pelajari lebih lanjut</Button>
        </div>

        <img src="/icons/program/Volunteer.png" alt="" className="w-[500px] hidden md:flex" />
      </div>
    </div>
  );
}

const MisiList = ({ children }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src="./icons/checklist.svg" alt="icon" />
      <p className="text-[#72717B] dark:text-gray-400 leading-relaxed tracking-[-0.7px]">
        {children}
      </p>
    </div>
  );
};

export default Misi;
