const PartnerSection = () => {
    return (
      <section className="max-w-6xl mx-auto  text-center py-12 px-4 mt-20">
        <p className="text-sm text-[#01B4BB] font-medium mb-1">Mitra Kerja Janji Baik</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Partner Kolaborasi Janji Baik</h2>
        <p className="max-w-2xl mx-auto text-[#72717B] text-sm md:text-base mb-10">
          Kami bangga bekerja sama dengan berbagai mitra yang mendukung visi Sekolah Janji Baik.
          Melalui kolaborasi ini, kami bersama-sama menciptakan peluang pendidikan yang lebih baik,
          menyediakan fasilitas yang memadai, serta membantu pengembangan karakter dan keterampilan siswa.
        </p>
  
        <div className="flex flex-col gap-24 mt-24 mb-32">
            <div className="flex flex-wrap justify-center gap-24">
                <img src="/icons/pertamina.png" className="w-[120px] h-[80px] object-contain"/>
                <img src="/icons/unilever.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/kadin.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/kitabisa.png" className="w-[120px] h-[80px] object-contain" />
            </div>
            <div className="flex flex-wrap justify-center gap-24">
                <img src="/icons/kaseto.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/bakrie.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/yayasandunia.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/FIM.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/ui.png" className="w-[120px] h-[80px] object-contain" />
            </div>

            <div className="flex flex-wrap justify-center gap-24">
                <img src="/icons/binus.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/untirta.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/unpad.png" className="w-[120px] h-[80px] object-contain" />
                <img src="/icons/unpam.png" className="w-[120px] h-[80px] object-contain" />
            </div>
        </div>
      </section>
    );
  };
  
  export default PartnerSection;