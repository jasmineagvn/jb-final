import { Routes, Route, Form } from "react-router";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import TentangKami from "./pages/TentangKami";
import JbOnNews from "./pages/jbonnews"
import DaftarSiswa from "./pages/Daftarsiswa";
import DaftarRelawan from "./pages/Daftarrelawan";
import DaftarKolaborasi from "./pages/Daftarkolaborasi";
import KontakKami from "./pages/KontakKami";
import DonasiBerkala from "./pages/Donasiberkala";
import DonasiUmum from "./pages/Donasiumum";
import Program from "./pages/Program";
import Team from "./pages/Team";
import Kampanye from "./pages/Kampanye";
import FormRelawan from "./pages/Daftarrelawan/formrelawan";
import SuccessPage from "./pages/Daftarrelawan/successpage";
import SyaratPage from "./pages/Daftarsiswa/syarat";
import JbBercerita from "./pages/Program/jbbercerita";
import FormBercerita from "./pages/Program/formbercerita";
import SuccessPageBercerita from "./pages/Program/successpage";
import FormBerkalaBaik from "./pages/Donasiberkala/formberkalabaik";
import SuccessPageBerkalaBaik from "./pages/Donasiberkala/successpage";
import GaleriList from "./pages/Galeri/Galeri";
import GaleriDetail from "./pages/Galeri/GaleriDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/jbonnews"  element={<JbOnNews />}/>
        <Route path="/galeri" element={<GaleriList />} />
        <Route path="/galeri/:id" element={<GaleriDetail />} />
        <Route path="/daftarsiswa" element={<DaftarSiswa />} />
        <Route path="/syaratdaftarsiswa" element={<SyaratPage />} />
        <Route path="/daftarrelawan" element={<DaftarRelawan />} />
        <Route path="/daftarkolaborasi" element={<DaftarKolaborasi />} />
        <Route path="/donasiberkala" element={<DonasiBerkala />} />
        <Route path="/donasiumum" element={<DonasiUmum />} />
        <Route path="/kontakkami" element={<KontakKami />} />
        <Route path="/program" element={<Program />} /> 
        <Route path="/team" element={<Team />} />
        <Route path="/kampanye" element={<Kampanye />} />
        <Route path="/formrelawan" element={<FormRelawan />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/jbbercerita" element={<JbBercerita />} />
        <Route path="/formbercerita" element={<FormBercerita />} />
        <Route path="/successpagebercerita" element={<SuccessPageBercerita />} />
        <Route path="/formberkalabaik" element={<FormBerkalaBaik />} />
        <Route path="/successpageberkalabaik" element={<SuccessPageBerkalaBaik />} />
      </Routes>
    </>
  );
}

export default App
