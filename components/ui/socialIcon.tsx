import { Button } from "./button";

interface SocialIconProps {
	icon: React.ReactNode;
	href: string;
}

export function SocialIcon({ icon, href }: SocialIconProps) {
	return (
		<Button asChild variant="social" size="icon">
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center"
			>
				{icon}
			</a>
		</Button>
	);
}
