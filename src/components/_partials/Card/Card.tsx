import Image from 'next/image';
import scss from './card.module.scss';

type CardProps = {
	block: {
		title: string;
		text: string;
		image: {
			sourceUrl: string;
			altText: string;
		};
	};
};

export default function Card({ block }: CardProps) {
	return (
		<article className={scss.card}>
			<div className={scss.image}>
				<Image
					src={block.image.sourceUrl}
					alt={block.image.altText}
					fill
				/>
			</div>
			<div className={scss.content}>
				<h2 className={scss.title}>{block.title}</h2>
				<div className={scss.text}>{block.text}</div>
			</div>
		</article>
	);
}
