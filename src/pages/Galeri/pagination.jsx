import CardGallery from "@/components/Gallery/cardgallery";
import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // 6 card per halaman

  // Ini semua card yang lo atur
  const cards = [
    {
      id: 1,
      title: "Pesta Ide Relawan",
      image: "/icons/galerikebaikan/kebaikan1.png",
    },
    {
      id: 2,
      title: "Ulang Tahun Janji Baik",
      image: "/icons/galerikebaikan/kebaikan2.png",
    },
    {
      id: 3,
      title: "Graduation Siswa Janji Baik",
      image: "/icons/galerikebaikan/kebaikan3.png",
    },
    {
      id: 4,
      title: "Kelas Kreasi",
      image: "/icons/galerikebaikan/kebaikan4.png",
    },
    {
      id: 5,
      title: "Peringatan Hari Nasional",
      image: "/icons/galerikebaikan/kebaikan5.png",
    },
    {
      id: 6,
      title: "Pengabdian Kepada Masyarakat",
      image: "/icons/galerikebaikan/kebaikan6.png",
    },
    {
      id: 7,
      title: "Kebaikan 7",
      image: "/icons/galerikebaikan/kebaikan1.png",
    },
    {
      id: 8,
      title: "Kebaikan 8",
      image: "/icons/galerikebaikan/kebaikan1.png",
    },
    {
      id: 9,
      title: "Kebaikan 9",
      image: "/icons/galerikebaikan/kebaikan1.png",
    },
  ];

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="mb-10">
        <CardGallery
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          cards={cards}
        />
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "border border-[#01B4BB] text-[#01B4BB]"
                : "bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
