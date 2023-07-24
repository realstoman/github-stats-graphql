import AppConstants from '@/constants/AppConstants';
import Heading from '../Heading';

export default function Header() {
	return (
		<div>
			<div className="text-center pt-10">
				<h1 className="mb-4 text-3xl leading-9 font-extrabold sm:leading-none tracking-normal text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
					{AppConstants.heading1}{' '}
					<Heading title="Github GraphQL API" /> and{' '}
					<Heading title="Apollo Client" />
				</h1>
			</div>

			<div className="mt-4 text-sm tracking-normal text-center">
				<p>
					{AppConstants.description}{' '}
					<a href="https://github.com/realstoman" target="_blank">
						<code className="px-2 py-0.5 text-white text-md bg-blue-600 rounded hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700">
							{AppConstants.username}
						</code>{' '}
					</a>
					<br />
					{AppConstants.description2}
				</p>
			</div>
		</div>
	);
}
