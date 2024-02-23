"use client";

import ResultProductList from "@/components/productions/ResultProductList";
import { Suspense } from "react";
import { Audio } from "react-loader-spinner";

export default function ProductionsPage() {
  return (
    <Suspense fallback={<Audio color="var(--blue-400)" />}>
      <ResultProductList />
    </Suspense>
  );
}
