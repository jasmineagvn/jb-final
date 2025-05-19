import React, { Suspense, useState } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";

const SekolahGratis = React.lazy(() => import("@/components/Program/SekolahGratis"));
const Lingkungan = React.lazy(() => import("@/components/Program/Lingkungan"));
const Bimbingan = React.lazy(() => import("@/components/Program/Bimbingan"));
const Kesejahteraan = React.lazy(() => import("@/components/Program/Kesejahteraan"));
const Komunitas = React.lazy(() => import("@/components/Program/Komunitas"));

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
    },
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
      <nav className="flex flex-wrap gap-6 lg:gap-3 justify-center mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePage(tab.id)}
            className={`py-2 rounded-full w-[206px] shadow-lg px-7 ${
              activePage === tab.id
                ? "text-white bg-[#01B4BB]"
                : "text-black border-[0.5px] hover:text-[#EC901D]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      {/* Halaman Konten */}
      <div className="container mx-auto p-6">
        <Suspense fallback={<Spinner />}>
          {tabs.find((tab) => tab.id === activePage)?.component}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default ProgramPage;
