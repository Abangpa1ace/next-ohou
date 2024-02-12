export async function initMocks() {
  if (typeof window === "undefined") {
    // 실행 환경이 서버라면
    const { server } = await import("./server");
    server.listen({
      onUnhandledRequest: "bypass",
    });
  } else {
    // 실행 환경이 브라우저라면
    const { worker } = await import("./browser");
    worker.start();
  }
}
