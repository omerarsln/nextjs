"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <IconButton onClick={() => setTheme("light")}>
          <LightMode />
        </IconButton>
      ) : (
        <IconButton onClick={() => setTheme("dark")}>
          <DarkMode />
        </IconButton>
      )}
    </div>
  );
}
