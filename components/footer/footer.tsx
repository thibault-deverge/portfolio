export function Footer() {
	return (
		<footer className="container flex flex-col gap-2 md:flex-row justify-between mx-auto px-4 py-4 text-neutral-600 text-sm">
			<p>@2025 Thibault Deverge</p>
			<p>
				Project available{" "}
				<a
					href="https://github.com/thibault-deverge/portfolio"
					target="_blank"
					className="underline cursor-pointer"
				>
					here
				</a>{" "}
				(Next.Js/Typescript)
			</p>
		</footer>
	);
}
