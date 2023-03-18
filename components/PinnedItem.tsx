import { FiBook } from 'react-icons/fi';

export default function PinnedItem({
	title,
	description,
	repoLink,
}: {
	title: string;
	description: string;
	repoLink: string;
}) {
	return (
		<a href={repoLink} target="_blank">
			<div className="flex h-32 w-64 cursor-pointer flex-col justify-between rounded-md border border-secondary-light bg-gray-50 px-4 py-2 shadow-md transition-all duration-300 hover:border hover:border-gray-200 dark:border-gray-900 dark:bg-gray-700 dark:hover:border-gray-700 sm:h-44 sm:w-72 sm:py-3">
				<div className="flex items-center justify-center">
					<FiBook className="text-2xl mr-2" />

					<h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white mt-1">
						{title}
					</h5>
				</div>

				<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
					{description}
				</p>
			</div>
		</a>
	);
}
