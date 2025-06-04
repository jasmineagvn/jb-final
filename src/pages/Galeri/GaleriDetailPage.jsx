import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";

const GaleriDetailViews = React.lazy(() => import("@/components/GaleriViews/GaleriDetail"));

function GaleriDetailPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <GaleriDetailViews />
    </Suspense>
  );
}

export default GaleriDetailPage;
