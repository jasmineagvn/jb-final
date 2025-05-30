import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import galeriData from "@/data/galeriData";
import Footer from "@/components/Footer";

const ITEMS_PER_PAGE = 6;

function GaleriListViews() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galeriData.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = galeriData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => setCurrentPage(page);

  return (
    <>
      <Hero
        image="/icons/bg-galeri.png"
        title="Galeri Kebaikan Janji Baik"
        description="Setiap gambar memiliki cerita. Inilah momen-momen penuh makna yang telah kami jalani bersama, mewujudkan janji untuk kebaikan. Mari terus berbagi dan menginspirasi!"
      />
      <div className="flex max-w-6xl mx-auto mt-[67px] flex-wrap justify-center gap-16">
        {currentItems.map((galeri) => (
          <div
            key={galeri.id}
            className="w-[320px] py-4 px-5 bg-white gap-6 flex flex-col items-center justify-center rounded shadow cursor-pointer"
            onClick={() => navigate(`/galeri/${galeri.id}`)}
          >
            <img
              src={galeri.thumbnail}
              alt={galeri.title}
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
            <div className="flex w-full justify-between items-center">
              <p className="text-sm text-gray-600 font-bold">{galeri.title}</p>
              <div className="bg-[#EC901D] p-1 rounded-full">
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
}

export default GaleriListViews;
