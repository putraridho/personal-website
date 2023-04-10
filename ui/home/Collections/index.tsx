import { Projects, Blog, Contact } from "./components";

import style from "./style.module.sass";

export function Collections(): React.ReactElement {
	return (
		<section className={style.collections}>
			<div className={style.grid}>
				<Projects />
				<Blog />
				<Contact />
			</div>
		</section>
	);
}
