import Footer from "@/components/Footer";
import React, { Suspense } from "react";
import Spinner from "@/components/Spinner";

const Content = React.lazy(() => import("./content"));
const Daftar = React.lazy(() => import("./daftar"));

function DaftarRelawan() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Daftar />
      </Suspense>
      <Footer />
    </>
  );
}

export default DaftarRelawan;
