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
import PinnedItem from '@/components/PinnedItem';

export default function Home({
	pinnedItems,
	publicRepos,
	totalFollowers,
	totalFollowing,
	totalGists,
}: any) {
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
					<div className="sm:grid sm:grid-cols-2 gap-2 space-y-2 sm:space-y-0 mt-10 sm:mt-6">
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
							stat={totalPublicRepos}
							statOf="Total Public Repos"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={totalFollowers}
							statOf="Total Followers"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={totalFollowing}
							statOf="Total Following"
							profileUrl={githubLink}
						/>
						<StatsCard
							stat={totalGists}
							statOf="Total Gists"
							profileUrl={githubLink}
						/>
					</div>

					<div className="w-full sm:max-w-2xl mt-8">
						<div className="mb-14 flex items-start justify-between space-x-4 overflow-x-scroll bg-scroll">
							<div className="ghProjects py-2">
								<div className="flex items-start justify-between space-x-4">
									{pinnedItems.map((item: any) => {
										return (
											<PinnedItem
												key={item.name}
												title={item.name}
												description={item.description}
												repoLink={item.url}
											/>
										);
									})}
								</div>
							</div>
						</div>
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

	// Create an auth link using apollo state and pass in the headers in the return object
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
		};
	});

	// Apollo client that gets an auth link and a memory cache constructor
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
									url
								}
							}
						}
					}

					followers {
						totalCount
					}

					following {
						totalCount
					}

					gists {
						totalCount
					}
				}
			}
		`,
	});

	// Destructure the data and get the user
	const { user } = data;

	// Get pinned items of the user
	const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

	// Get public repos of the user
	const publicRepos = user.repositories.edges.map((edge: any) => edge.node);

	// Get total followers count of the user
	const totalFollowers = user.followers.totalCount;

	// Get total following count of the user
	const totalFollowing = user.following.totalCount;

	// Get total following count of the user
	const totalGists = user.gists.totalCount;

	return {
		// Pass props to the component
		props: {
			pinnedItems,
			publicRepos,
			totalFollowers,
			totalFollowing,
			totalGists,
		},
	};
}
