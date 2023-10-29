"use client";

import { ThemeProvider } from "./context/theme-context";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
