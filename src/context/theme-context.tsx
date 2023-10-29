import { createContext, useEffect, useState } from "react";

export type WebsiteTheme = "dark" | "light";

export const ThemeContext = createContext<
  [WebsiteTheme, (_: WebsiteTheme) => void]
>(["light", () => {}]);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const COLOR_SCHEMA_KEY = "color_schema";

  const [theme, setTheme] = useState<WebsiteTheme>("light");

  useEffect(() => {
    const storageTheme = window.localStorage.getItem(COLOR_SCHEMA_KEY);
    const browserTheme = matchMedia?.("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
    setTheme((storageTheme as WebsiteTheme) ?? browserTheme);
  }, []);

  const setStoredTheme = (theme: WebsiteTheme) => {
    window.localStorage?.setItem(COLOR_SCHEMA_KEY, theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={[theme, setStoredTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
