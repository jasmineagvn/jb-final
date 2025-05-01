const peta = {
  title: "Jumlah Tiap Kota",
  data: [
    {
      icon: "icons/dots/red.png",
      city: "Bekasi",
      count: "5",
    },
    {
      icon: "icons/dots/blue.png",
      city: "Tangerang",
      count: "5",
    },
    {
      icon: "icons/dots/red2.png",
      city: "Depok ",
      count: "5",
    },
    {
      icon: "icons/dots/orange.png",
      city: "DKI Jakarta",
      count: "5",
    },
    {
      icon: "icons/dots/green2.png",
      city: "Cimahi",
      count: "5",
    },
    {
      icon: "icons/dots/skyblue.png",
      city: "Cilegon",
      count: "5",
    },
    {
      icon: "icons/dots/green.png",
      city: "Riau",
      count: "5",
    },
    {
      icon: "icons/dots/maroon.png",
      city: "Bogor",
      count: "5",
    },
    {
      icon: "icons/dots/purple2.png",
      city: "Kalimantan",
      count: "5",
    },
    {
      icon: "icons/dots/purple1.png",
      city: "Bali",
      count: "5",
    },
    {
      icon: "icons/dots/green4.png",
      city: "NTB",
      count: "5",
    },
    {
      icon: "icons/dots/electricblue.png",
      city: "Kuningan",
      count: "5",
    },
    {
      icon: "icons/dots/green3.png",
      city: "Serang",
      count: "5",
    },
    {
      icon: "icons/dots/yellow.png",
      city: "NTT",
      count: "5",
    },
  ],
};

export default function Manfaat() {
  return (
    <section className="mt-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="text-[#01B4BB] text-base">Penerima Manfaat</span>
        <h1 className="text-2xl font-bold mt-2 md:text-start text-center">
          Sebaran Siswa & Relawan Janji Baik di Indonesia
        </h1>
        <div className="bg-[#A9EAED] py-8 px-8 rounded-full flex justify-center items-center">
          <h1 className="text-[50px] text-orange-500 font-semibold">141</h1>
        </div>
        <p className="text-base text-slate-500">Tahun Pelajaran 2022/2023</p>
      </div>

      <div className="max-w-6xl mx-auto flex mt-8 gap-6 justify-between w-full">
        <img
          src="icons/peta.png"
          alt="Peta Sebaran"
          className="w-[40%] hidden md:block"
        />

        <div className="flex flex-col md:flex-row justify-between items-center border-[#01B4BB] border-2 p-4 gap-4 rounded-lg w-full md:w-[60%] mx-5">
          <div className="flex flex-col gap-4 justify-between items-center w-full">
            <h1 className="text-base text-slate-500 text-center">
              Total Data Penerima Manfaat (2022/2023)
            </h1>
            <div className="bg-[#A9EAED] py-8 px-7 rounded-full flex justify-center items-center">
              <h1 className="text-2xl text-orange-500 font-semibold">573</h1>
            </div>
            <p className="text-base text-slate-500 text-center">
              (pemberdayaan & sekolah gratis)
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <h1 className="text-center text-lg font-semibold">{peta.title}</h1>
            <div className="flex flex-wrap justify-start gap-1 space-x-0 md:space-x-2">
              {peta.data.map((items, index) => (
                <div key={index} className="flex items-center gap-2 w-[30%]">
                  <img src={items.icon} alt={items.city} className="w-2 h-2" />
                  <p className="text-sm text-slate-500">
                    {items.city} = {items.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-2  justify-end mb-15 hidden md:flex">
        <div className="relative w-[600px] h-2 mt-22">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-400 transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}
