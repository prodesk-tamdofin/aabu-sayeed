"use client";
import { useEffect } from "react";

const TARGET = "https://t.me/DailyEarning545_Bot?start=ref_6201077882";

export default function Redirector({ delay = 1500 }) {
  useEffect(() => {
    let timeoutId;

    const doRedirect = () => {
      window.location.href = TARGET;
    };

    const scheduleRedirect = (d = delay) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(doRedirect, d);
    };

    // initial redirect after delay
    scheduleRedirect(delay);

    // re-run redirect when page is shown from bfcache
    const onPageShow = (e) => {
      if (e.persisted) scheduleRedirect(200);
    };

    // re-run when document becomes visible (user returns via back or switching tabs)
    const onVisibility = () => {
      if (document.visibilityState === "visible") scheduleRedirect(200);
    };

    // re-run on history navigation (back/forward)
    const onPopState = () => scheduleRedirect(200);

    // also trigger on window focus
    const onFocus = () => scheduleRedirect(200);

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("focus", onFocus);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("focus", onFocus);
    };
  }, [delay]);

  return null;
}
