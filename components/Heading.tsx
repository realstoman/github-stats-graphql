export default function Heading({ title }: { title: string }) {
	return (
		<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-sky-500">
			{title}
		</span>
	);
}
