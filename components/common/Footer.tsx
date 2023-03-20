import { FiGithub } from 'react-icons/fi';

export default function Footer() {
	const getDate = new Date().getFullYear();

	return (
		<footer className=" bg-white rounded-lg shadow dark:bg-gray-800 max-w-xl mb-2 mt-4 sm:mt-8 flex justify-center items-center container mx-auto">
			<div className="w-full py-3 text-center sm:flex justify-between items-center px-8">
				<div className="flex justify-center items-center mb-4 sm:mb-0">
					<FiGithub className="mr-2" />

					<span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
						<a
							href="https://github.com/realstoman/github-stats-graphql"
							className="underline text-sky-500"
							target="_blank"
						>
							Source code
						</a>
					</span>
				</div>

				<span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
					{getDate} - Developed with{' '}
					<span className="text-xs">💛</span> by{' '}
					<a
						href="https://stoman.me/"
						className="underline text-sky-500"
						target="_blank"
					>
						Stoman
					</a>
				</span>
			</div>
		</footer>
	);
}
