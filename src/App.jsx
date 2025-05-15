import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import TentangKami from "./pages/TentangKami";
import JbOnNews from "./pages/jbonnews";
import Divisi from "./pages/Divisi";
import Galeri from "./pages/Galeri";
import DetailPage from "./components/Gallery/detailpage";
import DaftarSiswa from "./pages/Daftarsiswa";
import DaftarRelawan from "./pages/Daftarrelawan";
import DaftarKolaborasi from "./pages/Daftarkolaborasi";
import KontakKami from "./pages/KontakKami";
import DonasiBerkala from "./pages/Donasiberkala";
import DonasiUmum from "./pages/Donasiumum";
import Program from "./pages/Program";
import Team from "./pages/Team";
import Kampanye from "./pages/Kampanye";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/jbonnews"  element={<JbOnNews />}/>
        <Route path="/divisikami" element={<Divisi />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/daftarsiswa" element={<DaftarSiswa />} />
        <Route path="/daftarrelawan" element={<DaftarRelawan />} />
        <Route path="/daftarkolaborasi" element={<DaftarKolaborasi />} />
        <Route path="/donasiberkala" element={<DonasiBerkala />} />
        <Route path="/donasiumum" element={<DonasiUmum />} />
        <Route path="/kontakkami" element={<KontakKami />} />
        <Route path="/program" element={<Program />} /> 
        <Route path="/team" element={<Team />} />
        <Route path="/kampanye" element={<Kampanye />} />
      </Routes>
    </>
  );
}

export default App
