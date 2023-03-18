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
import Heading from '@/components/Heading';

export default function Home({ pinnedItems, publicRepos }: any) {
	const githubLink = 'https://github.com/realstoman';

	// Total public repos
	const totalPublicRepos = publicRepos.length;

	// Get public repositories stars
	const getStars = publicRepos.map((repo: { stargazerCount: number }) => {
		return repo.stargazerCount;
	});

	const totalStars = getStars.reduce(
		(totalStars: number, a: number) => totalStars + a,
		0
	);

	// Get public repositories forks
	const getForks = publicRepos.map((repo: { forkCount: number }) => {
		return repo.forkCount;
	});

	const totalForks = getForks.reduce(
		(totalForks: number, a: number) => totalForks + a,
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
							<Heading title="Github GraphQL API" /> and{' '}
							<Heading title="Apollo Client" />
						</h1>
					</div>

					<div className="mt-4 text-md tracking-normal text-center">
						<p>
							The data is being retrieved for the username:{' '}
							<code className="px-2 py-0.5 text-white bg-blue-600 rounded dark:bg-blue-500">
								@realstoman
							</code>
						</p>
					</div>

					<div className="sm:grid sm:grid-cols-2 gap-2 space-y-2 sm:space-y-0 mt-20">
						<StatsCard
							stat={totalStars}
							statOf="Total Github Stars"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={totalForks}
							statOf="Total Github Forks"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={94}
							statOf="Total Followers"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={totalPublicRepos}
							statOf="Total Public Repos"
							profileUrl={githubLink}
						/>
					</div>
				</main>
			</PageWrapper>
		</>
	);
}

export async function getStaticProps() {
	// Github GraphQL API link
	const httpLink = createHttpLink({
		uri: 'https://api.github.com/graphql',
	});

	// Create auth link using apollo client
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
		};
	});

	// Create client
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	// GraphQL queries to get the data from Github API
	const { data } = await client.query({
		query: gql`
			{
				user(login: "realstoman") {
					repositories(first: 100, privacy: PUBLIC) {
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

					followers(first: 100) {
						edges {
							node {
								id
							}
						}
					}
				}
			}
		`,
	});

	// Destructure the data
	const { user } = data;

	// Get pinned items of the user
	const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

	// Get public repos of the user
	const publicRepos = user.repositories.edges.map((edge: any) => edge.node);

	return {
		// Pass props to the component
		props: {
			pinnedItems,
			publicRepos,
		},
	};
}
