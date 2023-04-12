import style from "./style.module.sass";

interface ColorSchemePickerProps {
	onSelect?: (i: number) => void;
}

export function ColorSchemePicker({ onSelect = () => null }: ColorSchemePickerProps): React.ReactElement {
	return (
		<div className={style.float}>
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className={style.colors} onClick={() => onSelect(i)}>
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
