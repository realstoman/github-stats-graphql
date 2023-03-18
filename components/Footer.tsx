export default function Footer() {
	const getDate = new Date().getFullYear();

	return (
		<footer className=" bg-white rounded-lg shadow mb-2 dark:bg-gray-800 max-w-xl flex justify-center items-center container mx-auto">
			<div className="w-full py-3 text-center">
				<span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
					{getDate} - Developed by{' '}
					<a
						href="https://stoman.me/"
						className="hover:underline text-transparent bg-clip-text bg-gradient-to-r from-sky-500  to-pink-400"
						target="_blank"
					>
						Stoman
					</a>
				</span>
			</div>
		</footer>
	);
}
