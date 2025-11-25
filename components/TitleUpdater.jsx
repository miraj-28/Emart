"use client"
import { useEffect } from "react";

export default function TitleUpdater() {
  useEffect(() => {
    try {
      document.title = "Emart";
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

  return null;
}
