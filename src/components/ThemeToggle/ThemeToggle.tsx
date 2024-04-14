import {useEffect, useState} from "react";
import {FiMoon, FiSun} from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        let storedTheme = localStorage.getItem("theme") as string;

        if (!storedTheme) {
            localStorage.setItem("theme", theme);
        } else {
            setTheme(storedTheme);
            storedTheme === "light" ? document.querySelector("html")?.classList.remove("dark") : null;
            storedTheme === "dark" ? document.querySelector("html")?.classList.add("dark") : null;
        }
    }, [theme]);

    const changeTheme = (theme: string) => {
        let newTheme = theme === "light" ? "dark" : "light";

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        newTheme === "light"
            ? document.querySelector("html")?.classList.remove("dark")
            : document.querySelector("html")?.classList.add("dark");
    };

    return (
        <button aria-label={'theme toggle'}
            className="p-2 rounded-md bg-transparent hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            onClick={() => changeTheme(theme)}
        >
            {theme === "light" && <FiSun className="text-black w-7 h-7 xs:w-6 xs:h-6"/>}
            {theme === "dark" && <FiMoon className="text-white w-7 h-7 xs:w-6 xs:h-6"/>}
        </button>
    );
}
