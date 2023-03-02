import scss from './pageContainer.module.scss';

type CustomProps<E extends React.ElementType> = {
	children: React.ReactNode;
	as?: E;
};

type PageContainerProps<E extends React.ElementType> = CustomProps<E> &
	Omit<React.ComponentProps<E>, keyof CustomProps<E>>;

export function PageContainer<E extends React.ElementType = 'div'>({
	children,
	as
}: PageContainerProps<E>) {
	const Component = as || 'div';

	return <Component className={scss.pageContainer}>{children}</Component>;
}
