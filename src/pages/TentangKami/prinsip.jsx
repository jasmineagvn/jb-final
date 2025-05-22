const PrinsipSekolah = () => {
    return (
      <section className="text-center mt-20 md:mt-42 px-4">
        <p className="text-sm text-[#01B4BB] font-medium mb-1">Prinsip Sekolah Janji Baik</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Janji Baik Selaras Dengan SDGs</h2>
        <p className="max-w-2xl mx-auto text-[#72717B] text-sm lg:text-base mb-10">
        Selaras dengan Tujuan Pembangunan Berkelanjutan (Sdgs), Janji Baik mengusung Pendidikan yang berkualitas (4) dan Peran partisipasi kemitraan sebagai tujuan (17).
        </p>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:gap-24 mt-0 mb-32">
            <div className="flex flex-wrap w-[315px] h-[247px]">
                <img src="/icons/sdgs.png" className="max-w-full h-auto object-contain" />
            </div>
            <div className="flex flex-wrap justify-center w-[315px] h-[247px]">
                <img src="/icons/global.png" className="max-w-full h-auto object-contain" />
            </div>
            <div className="flex flex-wrap w-[315px] h-[247px]">
                <img src="/icons/sdgs3.png" className="max-w-full h-auto object-contain"/>
            </div>
        </div>
      </section>
    );
  };
  
export default PrinsipSekolah;