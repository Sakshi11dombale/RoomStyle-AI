
import React from "react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  // For demo, we'll just use localStorage and document.documentElement.class
  const [darkMode, setDarkMode] = React.useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem("theme") === "dark"
  );

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Dark Mode</span>
      <Switch checked={darkMode} onCheckedChange={setDarkMode} />
    </div>
  );
};

export { ThemeToggle };
