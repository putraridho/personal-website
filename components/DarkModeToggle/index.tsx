import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";
import { RiLightbulbFill, RiLightbulbLine } from "react-icons/ri";

import style from "./style.module.sass";

export function DarkModeToggle(): React.ReactElement {
	const { theme, setTheme, systemTheme } = useTheme();

	const ButtonIcon = useMemo(() => {
		if (theme === "dark") {
			return RiLightbulbFill;
		}

		if (theme === "system" && systemTheme === "dark") {
			return RiLightbulbFill;
		}

		return RiLightbulbLine;
	}, [systemTheme, theme]);

	const handleToggle = useCallback(() => {
		if (theme === "dark") {
			return setTheme("light");
		}

		if (theme === "system" && systemTheme === "dark") {
			return setTheme("light");
		}

		return setTheme("dark");
	}, [setTheme, systemTheme, theme]);

	return (
		<button type="button" className={style.darkModeButton} onClick={handleToggle}>
			<ButtonIcon size={20} />
		</button>
	);
}
