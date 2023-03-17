import PageMeta from '@/components/PageMeta';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';

export default function Home() {
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
						<a
							href="#"
							className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 className="mb-2 text-2xl font-medium tracking-normal text-gray-900 dark:text-white">
								289 Total Github Stars
							</h5>
						</a>
						<a
							href="#"
							className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 className="mb-2 text-2xl font-medium tracking-normal text-gray-900 dark:text-white">
								289 Total Github Stars
							</h5>
						</a>
						<div></div>
						<div></div>
					</div>
				</main>
			</PageWrapper>
		</>
	);
}
