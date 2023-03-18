import Heading from '../Heading';

export default function Header() {
	return (
		<div>
			<div className="text-center pt-10">
				<h1 className="mb-4 text-3xl leading-9 font-extrabold sm:leading-none tracking-normal text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
					Retrieve Data Using <Heading title="Github GraphQL API" />{' '}
					and <Heading title="Apollo Client" />
				</h1>
			</div>

			<div className="mt-4 text-sm tracking-normal text-center">
				<p>
					The data is being retrieved for the username:{' '}
					<code className="px-2 py-0.5 text-white text-md bg-blue-600 rounded dark:bg-blue-500">
						@realstoman
					</code>{' '}
					<br />
					To get your account stats, update the env file
				</p>
			</div>
		</div>
	);
}
