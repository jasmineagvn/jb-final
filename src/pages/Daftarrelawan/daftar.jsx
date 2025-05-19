import Button from "@/components/Button";
import React from "react";
import { Link } from "react-router-dom";

function Daftar() {
  return (
    <div className="md:w-[827px] w-full mx-auto justify-center items-center flex flex-col gap-6 mt-20 text-center px-5">
      <h1 className="md:text-5xl text-2xl font-bold">
        Siap Menjadi Bagian dari Sekolah Janji Baik untuk Mewujudkan Masa Depan
        yang Lebih Cerah?
      </h1>
      <Link to="/formrelawan">
        <button className="bg-[#EC901D] text-white px-6 py-2 w-[250px] h-[50px] mt-10 rounded-full hover:bg-orange-600 transition">Daftar Sebagai Relawan</button>
      </Link>
    </div>
  );
}

export default Daftar;
