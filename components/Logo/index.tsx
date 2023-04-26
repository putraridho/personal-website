import style from "./style.module.sass";

export function Logo(): React.ReactElement {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={style.logo}
		>
			<rect x="6.72852" y="41.1601" width="12.993" height="12.993" rx="6.49652" fill="var(--grey-200)" />
			<rect x="47.0068" y="12.5754" width="12.993" height="41.5777" rx="6.49652" fill="var(--grey-200)" />
			<rect
				x="4"
				y="19.0343"
				width="12.993"
				height="41.5777"
				rx="6.49652"
				transform="rotate(-45 4 19.0343)"
				fill="var(--accent-500)"
			/>
		</svg>
	);
}
