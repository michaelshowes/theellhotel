import scss from './fiftyFifty.module.scss';
import Image from 'next/image';

type FiftyFiftyProps = {
	block: {
		title: string;
		text: string;
		image: {
			sourceUrl: string;
			altText: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};

export default function FiftyFifty({ block }: FiftyFiftyProps) {
	return (
		<section className={scss.fiftyFifty}>
			<h2>{block.title}</h2>
			<div className={scss.inner}>
				<div className={scss.text}>{block.text}</div>
				<div className={scss.image}>
					<Image
						src={block.image.sourceUrl}
						alt={block.image.altText}
						width={block.image.mediaDetails.width}
						height={block.image.mediaDetails.height}
					/>
				</div>
			</div>
		</section>
	);
}
