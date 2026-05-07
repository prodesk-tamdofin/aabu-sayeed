"use client";
import { useEffect } from "react";

const TARGET = "https://www.redoyanulhaque.me";

export default function Redirector() {
  useEffect(() => {
    const doRedirect = () => {
      window.location.href = TARGET;
    };

    // immediate redirect
    doRedirect();

    // also re-trigger on navigation/back or when page is restored from bfcache
    const onPageShow = (e) => {
      if (e.persisted) doRedirect();
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") doRedirect();
    };
    const onPopState = () => doRedirect();
    const onFocus = () => doRedirect();

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return null;
}
