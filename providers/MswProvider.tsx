"use client";

import { PropsWithChildren, useEffect, useState } from "react";

const MswProviders = ({ children }: PropsWithChildren) => {
  const [ready, setReady] = useState<boolean>(false);

  const init = async () => {
    const initMocks = await import("@/mocks/index").then(
      (res) => res.initMocks
    );
    await initMocks();
    setReady(true);
  };

  useEffect(() => {
    if (!ready) init();
  }, [ready]);

  return <div>{children}</div>;
};

export default MswProviders;
