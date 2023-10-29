"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export const HtmlWithTheme = ({ children }: { children: React.ReactNode }) => {
  const [theme, _] = useContext(ThemeContext);

  return <html data-bs-theme={theme}>{children}</html>;
};
