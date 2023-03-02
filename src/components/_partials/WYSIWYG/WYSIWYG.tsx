import scss from './wysiwyg.module.scss';

// type WYSIWYGProps = {
// 	children: React.ReactNode;
// };

// export default function WYSIWYG({ children }: WYSIWYGProps) {
// 	return <div className={scss.wysiwyg}>{children}</div>;
// }

type CustomProps<E extends React.ElementType> = {
	text: string
	as?: E;
};

type WYSIWYGProps<E extends React.ElementType> = CustomProps<E> &
	Omit<React.ComponentProps<E>, keyof CustomProps<E>>;

export function WYSIWYG<E extends React.ElementType = 'div'>({
	text,
	as
}: WYSIWYGProps<E>) {
	const Component = as || 'div';

	return <Component className={scss.wysiwyg} dangerouslySetInnerHTML={{ __html: text }}></Component>;
}
