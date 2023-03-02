import scss from './placeholder.module.scss';

type PlaceholderProps = {
	variant?: 'text' | 'contained' | 'outline';
	width?: number;
	height?: number;
	children?: React.ReactNode;
};

export function Placeholder({ width, height, children }: PlaceholderProps) {
	return (
		<div
			className={scss.placeholder}
			style={
				{
					'--width': `${width}px`,
					'--height': `${height}px`
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
}
