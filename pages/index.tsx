import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import PageMeta from '@/components/PageMeta';
import PageWrapper from '@/components/PageWrapper';
import StatsCard from '@/components/StatsCard';

export default function Home({ pinnedItems, publicRepos }: any) {
	const githubLink = 'https://github.com/realstoman';

	// Get public repositories stars
	const getStars = publicRepos.map((repo: { stargazerCount: any }) => {
		return repo.stargazerCount;
	});

	const totalStars = getStars.reduce(
		(totalStars: any, a: any) => totalStars + a,
		0
	);

	// Get public repositories forks
	const getForks = publicRepos.map((repo: { forkCount: any }) => {
		return repo.forkCount;
	});

	const totalForks = getForks.reduce(
		(totalForks: any, a: any) => totalForks + a,
		0
	);

	return (
		<>
			<PageMeta title="Github Stats GraphQL" />

			<PageWrapper>
				<main className="flex justify-center flex-col items-center">
					<div className="text-center pt-10">
						<h1 className="mb-4 text-2xl leading-7 font-extrabold sm:leading-none tracking-normal text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
							Retrieve Data Using{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-sky-500">
								Github GraphQL API
							</span>{' '}
							and{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-sky-500">
								Apollo Client
							</span>
						</h1>
					</div>

					<div className="mt-4 text-md tracking-normal text-center">
						<p>
							The data is being retrieved for username:{' '}
							<code className="px-2 py-0.5 text-white bg-blue-600 rounded dark:bg-blue-500">
								@realstoman
							</code>
						</p>
					</div>

					<div className="sm:grid sm:grid-cols-2 gap-2 mt-20">
						<StatsCard
							stat={totalStars}
							statOf="Total Github Stars"
						/>
						<StatsCard
							stat={totalForks}
							statOf="Total Github Forks"
						/>
						<StatsCard stat={94} statOf="Total Github Followers" />
						<StatsCard stat={94} statOf="Total Public Repos" />
					</div>
				</main>
			</PageWrapper>
		</>
	);
}

export async function getStaticProps() {
	const httpLink = createHttpLink({
		uri: 'https://api.github.com/graphql',
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
		};
	});

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			{
				user(login: "realstoman") {
					repositories(first: 50, privacy: PUBLIC) {
						edges {
							node {
								stargazerCount
								forkCount
							}
						}
					}

					pinnedItems(first: 6) {
						totalCount
						edges {
							node {
								... on Repository {
									id
									name
									description
									forkCount
									url
									stargazerCount
								}
							}
						}
					}
				}
			}
		`,
	});

	const { user } = data;
	const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

	const publicRepos = user.repositories.edges.map((edge: any) => edge.node);

	return {
		props: {
			pinnedItems,
			publicRepos,
		},
	};
}
