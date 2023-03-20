import Head from 'next/head';

export default function PageMeta({ title }: { title: string }) {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content="Retrieve Data Using Github GraphQL API and Apollo Client"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
