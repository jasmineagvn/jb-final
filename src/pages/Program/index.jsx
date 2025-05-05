import React, { useState } from "react";
import SekolahGratis from "@/components/Program/SekolahGratis";
import Hero from "@/components/Hero";
import Lingkungan from "@/components/Program/Lingkungan";
import Bimbingan from "@/components/Program/Bimbingan";
import Kesejahteraan from "@/components/Program/Kesejahteraan";
import Komunitas from "@/components/Program/Komunitas";

function ProgramPage() {

  // Data navigasi
  const tabs = [
    {
      id: "Sekolahgratis",
      title: "Sekolah Gratis Berbasis Teknologi",
      component: <SekolahGratis />,
    },
    {
      id: "Lingkungan",
      title: "Lingkungan",
      component: <Lingkungan />,
    },
    {
      id: "bimbingan",
      title: "Bimbingan & Kesehatan Mental",
      component: <Bimbingan />,
    },
    {
      id: "Kesejahteraan",
      title: "Kesejahteraan Sosial",
      component: <Kesejahteraan />,
    },
    {
      id: "Komunitas",
      title: "Komunitas Kerelawanan",
      component: <Komunitas />,
    }
  ];

  const [activePage, setActivePage] = useState(tabs[0].id);

  return (
    <div className="Program">
      <Hero
        image="/icons/bg-kontakinformasi.png"
        title="Program Janji Baik"
        description="Janji Baik hadir sebagai ruang tumbuh bagi generasi muda melalui program pendidikan yang inklusif, lingkungan belajar yang ramah dan aman, serta bimbingan kesehatan mental yang menyeluruh. Kami juga berkomitmen membangun kesejahteraan sosial melalui kegiatan yang menumbuhkan empati, kolaborasi, dan kesadaran lingkungan."
      />

      {/* Tab Navigation */}
      <nav className="flex justify-center space-x-4  mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePage(tab.id)}
            className={`py-2 rounded-full w-[200px] px-7 ${
              activePage === tab.id
                ? "text-white bg-[#01B4BB]"
                : "text-black border-[1px] hover:text-[#EC901D]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      {/* Halaman Konten */}
      <div className="container mx-auto p-6">
        {tabs.find((tab) => tab.id === activePage)?.component}
      </div>
    </div>
  );
}

export default ProgramPage;
