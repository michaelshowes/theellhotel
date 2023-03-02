import React from 'react';

export default function List({ children }: { children: React.ReactNode }) {
	return (
		<ul>
			{React.Children.toArray(children).map((child, i) => (
				<li key={i}>{child}</li>
			))}
		</ul>
	);
}
