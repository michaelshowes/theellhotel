import scss from './button.module.scss';

type ButtonProps = {
	variant?: 'text' | 'contained' | 'outline';
	children: React.ReactNode;
} & React.ComponentProps<'button'>;

export default function Button({
	variant,
	children,
	...rest
}: ButtonProps & React.ComponentProps<'button'>) {
	return (
		<button
			className={scss.button}
			{...rest}
			style={
				{
					'--bg-color': `${variant === 'contained' && scss.orange_100}`,
					'--color': `${variant === 'contained' ? 'black' : scss.gray_300}`,
					'--border': `${
						variant === 'outline' && `1px solid ${scss.orange_100}`
					}`
				} as React.CSSProperties
			}
		>
			{children}
		</button>
	);
}
