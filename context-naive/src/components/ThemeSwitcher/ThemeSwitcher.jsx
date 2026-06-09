import { useContext, useRef } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { AppContext } from "../../context/AppContext";

const ThemeSwitcher = () => {
  const renderCounter = useRef(0)
  renderCounter.current++;
  const { state, dispatch } = useContext(AppContext);
  const isDark = state.ui.theme === "dark";

  const onToggleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
      <button
        type="button"
        onClick={onToggleTheme}
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
