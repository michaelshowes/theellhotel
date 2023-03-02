import scss from './standardHero.module.scss';
import Image from 'next/image';

type StandardHeroProps = {
	data: {
		title: string;
		subtext: string;
		image: {
			sourceUrl: string;
			altText: string;
		};
	};
};

export default function StandardHero({ data }: StandardHeroProps) {
	return (
		<section className={scss.standardHero}>
			<div className={scss.image}>
				<Image
					src={data.image.sourceUrl}
					alt={data.image.altText}
					fill
				/>
			</div>
			<div className={scss.inner}>
				<h1>{data.title}</h1>
				<div>{data.subtext}</div>
			</div>
		</section>
	);
}
