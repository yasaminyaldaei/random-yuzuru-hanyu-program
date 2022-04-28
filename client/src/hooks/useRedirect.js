import { useEffect } from "react";
import { getDeepLink } from "../api";

export function useRedirect() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const videoId = searchParams.get("videoId");

    if (pathname.includes("deep-link")) {
      getDeepLink({ videoId }).then((res) => {
        window.location.href = res.request.responseURL;
      });
    }
  }, []);
}
