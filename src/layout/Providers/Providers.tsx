'use client';

/* PROVIDER CONTAINER ------------------------------------------------------- */

/*This wrapper component allows the use of 3rd party Provider components in Server components that do not use the 'use client' client directive */

import { ApolloProvider } from '@apollo/client/react';
import { client } from '@lib/apollo';

export function Providers({ children }: { children: React.ReactNode }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
