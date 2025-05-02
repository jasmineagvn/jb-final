import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CardGallery({ currentPage, cardsPerPage, cards }) {
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const handleCardClick = (id) => {
    window.scrollTo(0, 0); 
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="flex justify-between mt-16 items-center">
        <h1 className="text-3xl pl-6 md:pl-14 font-semibold">
          Jejak Kebaikan dalam Setiap Momen
        </h1>
        <img
          src="/icons/garis-news.png"
          alt=""
          className="w-[50%] hidden md:block"
        />
      </div>
      <div className="flex max-w-6xl mx-auto mt-[67px] flex-wrap justify-center gap-16">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="w-[320px] py-4 px-5 bg-white gap-6 flex flex-col items-center justify-center rounded shadow cursor-pointer"
            onClick={() => handleCardClick(card.id)} // Panggil handler dengan ID kartu
          >
            <img
              src={card.image || "/icons/default-image.png"}
              alt={card.title}
              className="w-full h-[300px]"
            />
            <div className="flex w-full justify-between items-center">
              <p className="text-sm text-gray-600">{card.title}</p>
              <div className="bg-[#EC901D] p-1 rounded-full">
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
