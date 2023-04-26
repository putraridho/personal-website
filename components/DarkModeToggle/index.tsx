import { useTheme } from "next-themes";
import { useMemo } from "react";
import { RiLightbulbFill, RiLightbulbLine } from "react-icons/ri";

import style from "./style.module.sass";

export function DarkModeToggle(): React.ReactElement {
	const { theme, setTheme } = useTheme();

	const ButtonIcon = useMemo(() => (theme === "dark" ? RiLightbulbFill : RiLightbulbLine), [theme]);

	return (
		<button
			type="button"
			className={style.darkModeButton}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<ButtonIcon size={20} />
		</button>
	);
}
