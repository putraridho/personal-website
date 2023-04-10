import { Provider, Root, Trigger, Portal, Content } from "@radix-ui/react-tooltip";

import style from "./style.module.sass";

interface TooltipProps {
	content?: string;
	children?: React.ReactNode;
}

export function Tooltip({ children, content }: TooltipProps): React.ReactElement {
	return (
		<Provider delayDuration={100}>
			<Root>
				<Trigger asChild>{children}</Trigger>
				<Portal>
					<Content className={style.content} side="bottom" sideOffset={8}>
						{content}
					</Content>
				</Portal>
			</Root>
		</Provider>
	);
}
