import style from "./style.module.sass";

interface BadgeProps {
	children: React.ReactNode;
}

export function Badge({ children }: BadgeProps): React.ReactElement {
	return <div className={style.badge}>{children}</div>;
}
