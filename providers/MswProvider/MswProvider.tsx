import { isServer } from "@/constants";
import MswClientProviders from "@/providers/MswProvider/MswClientProvider";
import { PropsWithChildren } from "react";

(async () => {
  const init = await import("@/mocks/index").then((res) => res.initMocks);
  await init();
})();

const MswProviders = ({ children }: PropsWithChildren) => {
  return isServer ? (
    <>{children}</>
  ) : (
    <MswClientProviders>{children}</MswClientProviders>
  );
};

export default MswProviders;
