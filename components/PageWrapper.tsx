import React from 'react';
export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-4xl min-h-screen container mx-auto px-8">
			{children}
		</div>
	);
}