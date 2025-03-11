export function Heading2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-bebas text-5xl md:text-7xl text-neutral-50 tracking-tight">
			{children}
		</h2>
	);
}

export function Heading3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="font-manrope text-2xl text-neutral-50 lg:text-4xl leading-[1.4]">
			{children}
		</h3>
	);
}
