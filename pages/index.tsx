import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Github Stats GraphQL</title>
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

			<main className="">
				<div className="">
					<p className="text-1xl">
						Retrieve Data Using Github GraphQL API and Apollo Client
					</p>
				</div>

				<div className="mt-4 text-md tracking-wide">
					<p>
						The data is being retrieved for username:{' '}
						<code>@realstoman</code>
					</p>
				</div>
			</main>
		</>
	);
}
