import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/socialIcon";
import {
	FaArrowAltCircleDown,
	FaGithub,
	FaLinkedinIn,
	FaPaperclip,
} from "react-icons/fa";

export function HeroLink() {
	const t = useTranslations("Hero");

	return (
		<div className="flex flex-wrap gap-3 mt-4">
			<div className="flex gap-3">
				<Button asChild size="responsive">
					<Link href="#contact">
						<FaArrowAltCircleDown />
						Contact
					</Link>
				</Button>

				<Button asChild variant="secondary" size="responsive">
					<a href="/cv.pdf" download>
						<FaPaperclip />
						{t("CV")}
					</a>
				</Button>
			</div>

			<div className="flex gap-3">
				<SocialIcon
					href="https://www.linkedin.com/in/thibault-deverge-061724356"
					icon={<FaLinkedinIn />}
				/>
				<SocialIcon href="https://github.com/thibault-deverge" icon={<FaGithub />} />
			</div>
		</div>
	);
}
