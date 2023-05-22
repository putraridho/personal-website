import classNames from "classnames";

import style from "./style.module.sass";

interface ActiveProps {
	active: boolean;
}

export function Active({ active }: ActiveProps) {
	return <span className={classNames({ [style.active]: active })} />;
}
