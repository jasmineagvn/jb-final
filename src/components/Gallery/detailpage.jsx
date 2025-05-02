import { useParams } from "react-router-dom";
import PestaIdeRelawan from "../DetailGallery/PestaIdeRelawan";
import UlangTahun from "../DetailGallery/UlangTahun";
import GraduationSiswa from "../DetailGallery/GraduationSiswa";
import KelasKreasi from "../DetailGallery/KelasKreasi";
import PeringatanHariNasional from "../DetailGallery/PeringatanNasional";
import KegiatanBelajar from "../DetailGallery/KegiatanBelajar";

function DetailPage() {
  const { id } = useParams();
  const kebaikanId = parseInt(id);

  const renderDetail = () => {
    switch (kebaikanId) {
      case 1:
        return <KegiatanBelajar />;
      case 2:
        return <PestaIdeRelawan />;
      case 3:
        return <UlangTahun />;
      case 4:
        return <GraduationSiswa />;
      case 5:
        return <KelasKreasi />;

      case 6:
        return <PeringatanHariNasional />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Kebaikan tidak ditemukan</h1>
          </div>
        );
    }
  };

  return <>{renderDetail()}</>;
}

export default DetailPage;
