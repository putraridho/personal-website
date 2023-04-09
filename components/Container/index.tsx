import style from "./style.module.sass";

interface ContainerProps {
	children?: React.ReactNode;
}

export function Container(props: ContainerProps): React.ReactElement {
	return <div className={style.container} {...props} />;
}
