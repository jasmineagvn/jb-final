import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";


const GaleriListViews = React.lazy(() => import("@/components/GaleriViews/Galeri"));


function GaleriPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <GaleriListViews />
    </Suspense>
  );
}

export default GaleriPage;
