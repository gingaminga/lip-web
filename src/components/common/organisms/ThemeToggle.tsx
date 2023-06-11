import Moon from "@/assets/images/moon.svg";
import Sun from "@/assets/images/sun.svg";
import useThemeChanger from "@/hooks/useThemeChanger";

interface IThemeToggleIconStyle {
  height?: string;
  width?: string;
}

interface IThemeToggle {
  styles?: IThemeToggleIconStyle;
}

export default function ThemeToggle({ styles }: IThemeToggle) {
  const { height = "h-5", width = "w-5" } = styles || {};
  const { toggle, toggleHandler } = useThemeChanger();

  return (
    <label className="swap swap-rotate" htmlFor="theme-toggle">
      <input checked={toggle} id="theme-toggle" onChange={toggleHandler} type="checkbox" />
      <Sun className={`swap-on fill-current ${width} ${height}`} />
      <Moon className={`swap-off fill-current ${width} ${height}`} />
    </label>
  );
}
