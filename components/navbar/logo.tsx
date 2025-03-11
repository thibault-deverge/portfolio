import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Logo() {
	return (
		<Button asChild variant="ghost">
			<Link href="/" className="hover:bg-transparent">
				<Image
					src="/images/logo.png"
					alt="logo"
					priority
					width={524}
					height={225}
					className="h-7 md:h-10 w-auto object-contain"
				/>
			</Link>
		</Button>
	);
}
