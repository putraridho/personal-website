import classNames from "classnames";
import style from "./style.module.sass";
import { useState } from "react";

interface ColorSchemePickerProps {
	onSelect?: (i: number) => void;
}

export function ColorSchemePicker({ onSelect = () => null }: ColorSchemePickerProps): React.ReactElement {
	const [selected, setSelected] = useState(2);

	return (
		<div className={style.float}>
			{[1, 2, 3, 4].map((i) => (
				<div
					key={i}
					className={classNames(style.colors, { [style.order]: selected === i })}
					onClick={() => {
						onSelect(i);
						setSelected(i);
					}}
				>
					{[1, 2, 3, 4, 5].map((j) => (
						<div
							key={j}
							className={style.color}
							style={{
								background: `var(--scheme-${i}-${j * 100})`,
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
}
