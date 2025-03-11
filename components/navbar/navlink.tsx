import Link from "next/link";

interface NavlinkProps {
	href: string;
	children: React.ReactNode;
}

export function Navlink({ href, children }: NavlinkProps) {
	return (
		<Link
			href={href}
			className="hover:underline hover:underline-offset-5 hover:decoration-lime-400"
		>
			{children}
		</Link>
	);
}
