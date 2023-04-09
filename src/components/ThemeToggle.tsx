import Moon from "@/assets/images/moon.svg";
import Sun from "@/assets/images/sun.svg";
import useThemeChanger from "@/hooks/useThemeChanger";

export default function ThemeToggle() {
  const { toggle, toggleHandler } = useThemeChanger();

  return (
    <label className="swap swap-rotate" htmlFor="theme-toggle">
      <input checked={toggle} id="theme-toggle" onChange={toggleHandler} type="checkbox" />
      <Sun className="swap-on fill-current w-10 h-10" />
      <Moon className="swap-off fill-current w-10 h-10" />
    </label>
  );
}
