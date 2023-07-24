import { StatsCardTypes } from '@/types/AppTypes';

export default function StatsCard({
	stat,
	statOf,
	profileUrl,
}: StatsCardTypes) {
	return (
		<a
			href={profileUrl}
			className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			target="_blank"
		>
			<h5 className="mb-2 text-2xl font-medium tracking-normal text-gray-900 dark:text-white">
				{statOf}:{' '}
				<span className="underline decoration-3 decoration-zinc-900 dark:decoration-zinc-500 text-red-500 dark:text-yellow-400">
					{stat}
				</span>
			</h5>
		</a>
	);
}
