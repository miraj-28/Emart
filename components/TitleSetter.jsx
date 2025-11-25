"use client";
import { useEffect } from "react";

export default function TitleSetter() {
  useEffect(() => {
    try {
      document.title = "Emart";
    } catch (e) {
      // ignore server-side or strict mode errors
    }
  }, []);

  return null;
}
