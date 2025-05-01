import React from "react";

function Content() {
  return (
    <div className="flex flex-col gap-10 mt-20">

      <div className="md:px-16 px-5 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[50%] flex flex-col order-2 md:order-1">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Canvas Think
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Memastikan daftar tutor atau pengajar, termasuk nama tutor, kelas,
              tugas, dan mata pelajaran, serta menyusun jadwal pelajaran per
              modul dengan berkoordinasi sesuai ketersediaan masing-masing
              tutor. Selain itu, mengatur dan mengontrol kalender pendidikan
              akademik selama satu tahun pelajaran, melakukan briefing terkait
              jobdesk kepada Caretaker (wali kelas dan konselor), serta
              memproses laporan hasil belajar bersama Caretaker untuk memastikan
              kelancaran proses akademik.
            </p>
          </div>
          <img
            src="/icons/canvas-think.png"
            alt=""
            className="w-[500px] order-1 md:order-2"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/icons/human.png" alt="" className="w-[500px]" />
          <div className="md:w-[50%] w-full flex flex-col text-start md:text-end">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Human Responsibility
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Human Responsibility mencakup proses rekrutmen dan pengelolaan
              database relawan, serta memastikan pemanfaatan kemampuan SDM
              relawan sesuai dengan domisili masing-masing. Selain itu,
              bertanggung jawab untuk meningkatkan rasa keterikatan
              antarrelawan, mengakomodasi kebutuhan serta permasalahan mereka,
              dan merancang program apresiasi sebagai bentuk penghargaan kepada
              seluruh relawan.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#A9EAEDC2] md:px-16 px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-[50%] w-full flex flex-col order-2 md:order-1">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Creative Seeker
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Creative Seeker bertanggung jawab untuk mengatur, melaksanakan,
              dan mengevaluasi program ‘Kelas Kreasi’, serta menjalin kerja sama
              dengan berbagai lembaga, organisasi, dan instansi untuk mengisi
              program-program non-akademik. Selain itu, peran ini mencakup
              penyusunan dan pelaksanaan kegiatan ekstrakurikuler beserta
              capaian kompetensi bagi siswa Janji Baik, serta pembuatan laporan
              mengenai peningkatan keterampilan siswa hasil dari kegiatan Kelas
              Kreasi.
            </p>
          </div>
          <img
            src="/icons/creative.png"
            alt=""
            className="w-[500px] order-1 md:order-2"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/icons/tutor.png" alt="" className="w-[500px]" />
          <div className="md:w-[50%] w-full flex flex-col text-start md:text-end">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Tutor/Caretaker
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Tutor/Caretaker bertanggung jawab untuk mengajar secara online
              sesuai dengan mata pelajaran, kelas, dan jadwal yang telah
              ditentukan, serta menyusun soal uji modul berdasarkan materi yang
              telah diajarkan. Selain itu, peran ini mencakup mengoreksi dan
              mengumpulkan nilai, menyiapkan bahan belajar, serta mengecek
              jadwal secara berkala. Tutor/Caretaker juga bertugas melakukan
              evaluasi penilaian serta menyampaikan kendala dalam interaksi
              belajar dan fasilitas penunjang belajar guna meningkatkan
              efektivitas pembelajaran.
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-16 px-5 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[50%] flex flex-col order-2 md:order-1">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Growth Maker
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Growth Maker bertanggung jawab untuk membuat, mengelola, dan
              mengevaluasi program fundraising, serta menyusun database donatur
              atau rekan lembaga dan melakukan tindak lanjut secara berkala.
              Selain itu, peran ini mencakup membangun komunikasi kelembagaan
              dalam penerimaan pendanaan hibah atau CSR, mengajukan kerja sama
              antarlembaga untuk pengembangan sekolah, serta berpartisipasi
              dalam kompetisi dan pitching ide sosial guna mendukung pertumbuhan
              dan keberlanjutan program.
            </p>
          </div>
          <img
            src="/icons/growth.png"
            alt=""
            className="w-[500px] order-1 md:order-2"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/icons/student.png" alt="" className="w-[500px]" />
          <div className="md:w-[50%] w-full flex flex-col text-start md:text-end">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Student Glory
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Student Glory bertanggung jawab untuk merancang program atau
              kampanye PPDB, serta mengorganisir data dan persyaratan calon
              siswa, siswa aktif, dan lulusan. Selain itu, peran ini mencakup
              membantu pengurusan akta lahir serta data kependudukan peserta
              didik, mengelola DAPODIK siswa Janji Baik, dan menyeleksi calon
              siswa yang layak diusulkan untuk menerima beasiswa. Student Glory
              juga berperan dalam mengatur program peringatan hari besar
              nasional dan keagamaan, serta membina dan mengelola kegiatan OSIS
              guna mendukung perkembangan karakter dan kepemimpinan siswa.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#A9EAEDC2] md:px-16 px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-[50%] w-full flex flex-col order-2 md:order-1">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Digital Heroes
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Digital Heroes bertanggung jawab dalam merancang dan memproduksi
              konten untuk media sosial Janji Baik, serta menjalankan strategi
              digital marketing seperti ads, paid promote, dan kolaborasi dengan
              influencer. Selain itu, tim ini berperan sebagai dokumentasi dalam
              berbagai kegiatan, memperbarui serta mengelola website, menulis
              dan mempublikasikan artikel untuk berita online, serta mencari
              talent (volunteer) guna mendukung kebutuhan konten. Digital Heroes
              juga menyusun laporan dan evaluasi berkala untuk meningkatkan
              performa sosial media Janji Baik secara efektif.
            </p>
          </div>
          <img
            src="/icons/digital.png"
            alt=""
            className="w-[500px] order-1 md:order-2"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/icons/counselor.png" alt="" className="w-[500px]" />
          <div className="md:w-[50%] w-full flex flex-col text-start md:text-end">
            <h1 className="text-2xl font-semibold border-[#72717B] border-b-[1px] pb-10">
              Counselor
            </h1>
            <p className="text-base text-[#72717B] mt-10">
              Counselor bertanggung jawab menjalankan program konsultasi online
              "Janji Baik Bercerita", serta melakukan pendampingan siswa dalam
              konseling individual dan kelompok. Selain itu, peran ini mencakup
              pendampingan bagi orang tua atau wali siswa melalui Seminar
              Parenting, serta melakukan Home Visit jika diperlukan untuk
              menangani permasalahan siswa. Counselor juga berperan dalam
              menyusun dan mengembangkan program konseling secara berkala guna
              mendukung kesejahteraan psikologis siswa.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Content;
