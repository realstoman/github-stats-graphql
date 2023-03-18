export default function Heading({ title }: { title: string }) {
	return (
		<span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 via-pink-400 from-sky-500">
			{title}
		</span>
	);
}
