import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import style from "./style.module.sass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	shade?: 100 | 200 | 300 | 400 | 500;
}

export default function Button({ shade = 300, className, ...props }: ButtonProps): React.ReactElement {
	return <button type="button" className={classNames(style.button, style[`shade-${shade}`], className)} {...props} />;
}
