import Button from '@components/_partials/Button/Button';
import { WYSIWYG } from '@components/_partials/WYSIWYG/WYSIWYG';
import scss from './textBlock.module.scss';

type TextBlockProps = {
	block: {
		text: string;
	};
};

export default function TextBlock({ block }: TextBlockProps) {
	return (
		<section className={scss.textBlock}>
			<div className={scss.inner}>
				<h2>Text Block Component</h2>
				<WYSIWYG text={block.text} />
			</div>
		</section>
	);
}
