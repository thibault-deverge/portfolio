import Link from "next/link";

interface SheetLinkProps {
	href: string;
	last?: boolean;
	children: React.ReactNode;
}

export function SheetLink({ href, last, children }: SheetLinkProps) {
	return (
		<Link
			href={href}
			className={`text-neutral-100 ml-4 mt-3 hover:underline hover:underline-offset-5 hover:decoration-lime-400 ${
				last && "mb-4"
			}`}
		>
			{children}
		</Link>
	);
}
