import { ThemeContext, WebsiteTheme } from "@/context/theme-context";
import { useContext } from "react";
import { Form } from "react-bootstrap";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const switchTheme = (theme: WebsiteTheme) => () => {
    setTheme(theme);
  };

  return (
    <Form.Check // prettier-ignore
      type="switch"
      id="theme-switcher"
      label="Dark mode"
      aria-pressed={theme == "dark"}
      checked={theme === "dark"}
      onChange={(e) => {
        const newTheme: WebsiteTheme = e.currentTarget.checked
          ? "dark"
          : "light";
        if (!document.startViewTransition) {
          switchTheme(newTheme)();
        } else {
          document.startViewTransition(switchTheme(newTheme));
        }
      }}
    />
  );
};
