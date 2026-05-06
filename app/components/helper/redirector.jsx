"use client";
import { useEffect } from "react";

export default function Redirector({ delay = 1500 }) {
  useEffect(() => {
    const id = setTimeout(() => {
      window.location.href = "https://t.me/DailyEarning545_Bot?start=ref_6201077882";
    }, delay);
    return () => clearTimeout(id);
  }, [delay]);

  return null;
}
