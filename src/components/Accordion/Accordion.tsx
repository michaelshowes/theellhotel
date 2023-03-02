import scss from './accordion.module.scss';
import AccordionTrigger from './AccordionTrigger/AccordionTrigger';

type CustomProps<E extends React.ElementType> = {
	block: {
		id: number;
		header: string;
		content: string;
	}[];
	as?: E;
};

type AccordionProps<E extends React.ElementType> = CustomProps<E> &
	Omit<React.ComponentProps<E>, keyof CustomProps<E>>;

export function Accordion<E extends React.ElementType = 'div'>({
	block,
	as
}: AccordionProps<E>) {
	const Component = as || 'div';

	function handleClick() {
		console.log('clicked');
	}

	return (
		<Component className={scss.accordion}>
			{block.map((item) => (
				<div key={item.id}>
					<AccordionTrigger
						header={item.header}
						onClick={handleClick}
					/>
					<div className={scss.content}>
						<p>{item.content}</p>
					</div>
				</div>
			))}
		</Component>
	);
}
