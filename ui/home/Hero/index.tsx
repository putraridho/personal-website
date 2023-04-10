import style from "./style.module.sass";

export function Hero(): React.ReactElement {
	return (
		<section className={style.hero}>
			<HeroText />
		</section>
	);
}

function HeroText(): React.ReactElement {
	return (
		<div className={style.heroText}>
			<h1 className={style.heroTitle}>
				Greetings, It&lsquo;s
				<span className={style.big}>Ridho</span>
			</h1>
			<p className={style.heroSubtitle}>
				A mortal <span className={style.accent}>Frontend Wizard</span>, casting spells to create a visually captivating
				and intuitive websites that enchant users with seamless navigation and awe-inspiring design. With my mastery of
				modern web technologies, I embark on epic quests to create web solutions that leave a lasting impression,
				bringing the magic of exceptional user experiences to life in the realm of the World Wide Web.
			</p>
		</div>
	);
}
