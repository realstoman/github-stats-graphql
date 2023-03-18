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
			<div className="flex h-32 w-64 cursor-pointer flex-col justify-between border-secondary-light px-4 py-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm:h-32 sm:w-72 sm:py-3">
				<div className="flex items-center justify-left">
					<FiBook className="text-lg mr-2" />
					<h5 className="mb-2 text-md font-semibold text-gray-900 dark:text-white mt-1">
						{title}
					</h5>
				</div>

				<p className="mb-3 text-sm font-normal text-gray-500 leading-5 dark:text-gray-400">
					{description}
				</p>
			</div>
		</a>
	);
}
