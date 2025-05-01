import Button from "@/components/Button";
import React from "react";

function Daftar() {
  return (
    <div className="md:w-[827px] w-full mx-auto justify-center items-center flex flex-col gap-6 mt-20 text-center px-5">
      <h1 className="md:text-5xl text-2xl font-bold">
        Siap Menjadi Bagian dari Sekolah Janji Baik untuk Mewujudkan Masa Depan
        yang Lebih Cerah?
      </h1>
      <Button variant={"primary"} >Daftar Sebagai Relawan</Button>
    </div>
  );
}

export default Daftar;
