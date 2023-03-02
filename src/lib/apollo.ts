import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'http://localhost:10004/api',
	cache: new InMemoryCache()
});
