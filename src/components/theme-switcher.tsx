import { ThemeContext, WebsiteTheme } from "@/context/theme-context";
import { useContext } from "react";
import { Form } from "react-bootstrap";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <Form.Check // prettier-ignore
      type="switch"
      id="theme-switcher"
      label="Dark mode"
      checked={theme === "dark"}
      onChange={(e) => {
        const newTheme: WebsiteTheme = e.currentTarget.checked
          ? "dark"
          : "light";
        setTheme(newTheme);
      }}
    />
  );
};
