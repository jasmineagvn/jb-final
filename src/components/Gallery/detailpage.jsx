import { useParams } from "react-router-dom";
import DetailGalleri1 from "../DetailGalleri1";
import DetailGalleri2 from "../DetailGalleri2";
import DetailGalleri3 from "../DetailGalleri3";``
import DetailGalleri4 from "../DetailGalleri4";
import DetailGalleri5 from "../DetailGalleri5";

function DetailPage() {
  const { id } = useParams();
  const kebaikanId = parseInt(id);

  const renderDetail = () => {
    switch (kebaikanId) {
      case 1:
        return <DetailGalleri1 />;
      case 2:
        return <DetailGalleri2 />;
      case 3:
        return <DetailGalleri3 />;
      case 4:
        return <DetailGalleri4 />;
      case 5:
        return <DetailGalleri5 />;
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
