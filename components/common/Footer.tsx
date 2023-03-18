export default function Footer() {
	const getDate = new Date().getFullYear();

	return (
		<footer className=" bg-white rounded-lg shadow dark:bg-gray-800 max-w-xl mb-2 mt-8 flex justify-center items-center container mx-auto">
			<div className="w-full py-3 text-center">
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
