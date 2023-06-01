"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderNext({ children }) {
  return (
    <ThemeProvider enableSystem={true} enableColorScheme={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
