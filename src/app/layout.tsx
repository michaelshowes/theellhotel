import '@styles/main.scss';
import '@styles/normalize.scss';

import { MainContent, PageContainer } from '@layout';
import { Footer, Header } from '@components';
import { Inter } from 'next/font/google';
import { Providers } from '@layout/Providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'The Ell Hotel',
		template: '%s | The Ell Hotel'
	},
	description: ''
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body>
				<Providers>
					<PageContainer>
						<Header />
						<MainContent>{children}</MainContent>
						<Footer />
					</PageContainer>
				</Providers>
			</body>
		</html>
	);
}
