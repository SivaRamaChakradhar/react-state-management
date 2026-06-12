import { useRef } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useSelector, useDispatch } from 'react-redux'

import { toggleTheme } from '../../store/uiSlice'

const ThemeSwitcher = () => {
  const theme = useSelector(state => state.ui.theme);
  const dispatch = useDispatch();
  const renderCounter = useRef(0);
  renderCounter.current++;
  const isDark = theme === "dark";
  return (
      <button
        type="button"
        onClick={() => dispatch(toggleTheme())}
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
