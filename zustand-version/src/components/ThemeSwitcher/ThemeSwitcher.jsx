import { useRef } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

import useAppStore from "../../store/useAppStore";

const ThemeSwitcher = () => {
  const theme = useAppStore((state) => state.ui.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const renderCounter = useRef(0);
  renderCounter.current++;
  const isDark = theme === "dark";
  return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="theme-switcher"
      >
        <small data-testid="render-count">themecount: {renderCounter.current}</small>
        {isDark ? <HiSun className="icon" /> : <HiMoon className="icon" />}
        {isDark ? 'Light' : 'Dark'}
      </button>
  );
};

export default ThemeSwitcher;
