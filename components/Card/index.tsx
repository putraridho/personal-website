import style from "./style.module.sass";

interface CardProps {
	children?: React.ReactNode;
}

export default function Card(props: CardProps): React.ReactElement {
	return <div className={style.card} {...props}></div>;
}
