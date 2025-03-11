import Link from "next/link";

interface AccentLinkProps {
	href: string;
	target?: string;
	children: React.ReactNode;
}

export function StyledLink({ href, target, children }: AccentLinkProps) {
	return (
		<Link
			href={href}
			target={target}
			className="pb-1 border-b-2 border-accent text-accent text-lg hover:text-neutral-50 hover:border-neutral-50 transition-all duration-300"
		>
			{children}
		</Link>
	);
}
