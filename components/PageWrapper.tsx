import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-4xl min-h-screen container mx-auto px-8 flex flex-col justify-between">
			<Header />

			{children}

			<Footer />
		</div>
	);
}
