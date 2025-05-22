import { Link } from "react-router-dom";

const PointItem = ({ text }) => (
  <div className="flex items-start gap-2">
    <img src="/icons/check.png" alt="icon" className="w-5 h-5 mt-1" />
    <span className="text-sm text-[#72717B]">{text}</span>
  </div>
);

const RulesSection = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-white text-center">
      <img
        src="/icons/jbbercerita.png"
        alt="Janji Baik Bercerita"
        className="w-[650px] h-[268px] mb-8"
      />

      {/* Card container */}
      <div className="bg-[#E7F6F7] shadow-lg rounded-[30px] px-6 py-8 max-w-5xl w-full h-[450px] mb-8">
        <h2 className="text-xl font-bold mb-2 pb-6">
          Rules & Disclaimer Bercerita
        </h2>
        <div className="mx-auto mb-8 h-1 w-140 bg-black rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-[#72717B]">
          <ul className="space-y-4 list-disc list-inside]">
            <PointItem text="Janji Baik Bercerita merupakan layanan licensing storybal (peer counselor)" />
            <PointItem text="Durasi 1 sesi bercerita berlangsung 60 menit" />
            <PointItem text="Konseling dilaksanakan oleh Kakak Fasilitator Janji Baik Bercerita" />
            <PointItem text="Setiap konseling yang tidak digunakan dapat dibatalkan dalam 24 jam" />
            <PointItem text="Sesi dilakukan secara daring:" />
            <div className="pl-6 space-y-2">
              <div>• WhatsApp / Google Meet / Zoom</div>
              <div>
                • Offline (hanya berlaku jika tersedia kegiatan di kota yang
                sama)
              </div>
            </div>
          </ul>

          <ul className="space-y-6 list-disc list-inside">
            <PointItem text="Terbuka untuk Siswa, Relawan, dan Umum" />
            <PointItem text="Bercerita sangat penting agar seseorang mampu meredakan stres, meningkatkan regulasi emosi, pola pikir logis, pengambilan keputusan yang sehat, dll." />
            <PointItem text="Janji Baik Bercerita ditujukan untuk mendukung program konselor Janji Baik" />
          </ul>
        </div>
      </div>

      {/* CTA Button Section */}
      <div className="flex justify-center">
        <div className="mt-10 w-[800px] h-full lg:h-[230px] bg-[#01B4BB] rounded-[55px] text-white text-center py-12">
          <p className="font-semibold text-[24px] mb-2 px-3">
            Sudah baca rules-nya? Yuk, lanjut dengan klik tombol di bawah untuk
            mulai bikin janji atau tanya dulu. Janji Baik Bercerita siap jadi
            ruang aman untuk kisahmu tumbuh dan didengar.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <Link
              to={"/formbercerita"}
              className="bg-[#F79E1B] w-[250px] text-white px-6 py-2 rounded-full hover:bg-[#e58f12] transition"
            >
              Buat Janji Sekarang
            </Link>
            <a
              href="https://wa.me/62817170422"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F79E1B] w-[250px] text-white px-6 py-2 rounded-full hover:bg-[#e58f12] transition"
            >
              Tanya Dulu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
