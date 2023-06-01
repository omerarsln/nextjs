import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <div className="flex p-4 items-center justify-between">
      <h1>Header</h1>
      <ThemeSwitch />
    </div>
  );
}
