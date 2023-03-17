export default function StatsCard({
	stat,
	statOf,
}: {
	stat: number;
	statOf: string;
}) {
	return (
		<a
			href="#"
			className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
		>
			<h5 className="mb-2 text-2xl font-medium tracking-normal text-gray-900 dark:text-white">
				{stat} {statOf}
			</h5>
		</a>
	);
}
