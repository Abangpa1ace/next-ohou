"use client";

import { PropsWithChildren, useEffect, useState } from "react";

const MswClientProviders = ({ children }: PropsWithChildren) => {
  const [ready, setReady] = useState<boolean>(false);

  const initMocks = async () => {
    const init = await import("@/mocks/index").then((res) => res.initMocks);
    await init();
    setReady(true);
  };

  useEffect(() => {
    if (!ready) {
      initMocks();
    }
  }, [ready]);

  return !ready ? null : <>{children}</>;
};

export default MswClientProviders;
