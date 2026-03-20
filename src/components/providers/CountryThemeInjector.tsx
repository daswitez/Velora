"use client";

import { useEffect } from "react";

export function CountryThemeInjector({ themeToken }: { themeToken: string }) {
  useEffect(() => {
    // Apply the theme token to the body so globals.css can pick it up
    document.body.setAttribute('data-country', themeToken);

    // Optional: cleanup to revert to global default if we unmount (e.g., go back to home)
    return () => {
      document.body.removeAttribute('data-country');
    };
  }, [themeToken]);

  return null; // This is a logic-only component
}
