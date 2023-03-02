import Link from 'next/link';
import scss from './header.module.scss';

type HeaderProps = {};

export function Header({}: HeaderProps) {
	return (
		<header className={scss.header}>
			<h1>Header</h1>
			<Link href={'/'}>Home</Link>
			<Link href={'/components'}>Components</Link>
		</header>
	);
}
