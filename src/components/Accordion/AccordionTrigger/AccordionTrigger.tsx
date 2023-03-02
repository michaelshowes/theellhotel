'use client';

import { HiOutlineChevronUp } from 'react-icons/hi';
import scss from '../accordion.module.scss';

type AccordionTriggerProps = {
	header: string;
	onClick: () => void;
};

export default function AccordionTrigger({
	header,
	onClick
}: AccordionTriggerProps) {
	return (
		<button
			className={scss.header}
			onClick={onClick}
		>
			<h3>{header}</h3>
			<HiOutlineChevronUp />
		</button>
	);
}
