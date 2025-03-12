import { useTranslations } from "next-intl";

import { Heading2, Heading3 } from "@/components/ui/heading";
import { StyledLink } from "@/components/ui/styledLink";
import { Separator } from "@/components/ui/separator";

export function About() {
	const t = useTranslations("About");

	return (
		<>
			<section
				id="about"
				className="container flex flex-col items-stretch justify-between md:flex-row mx-auto px-4 py-16"
			>
				<Heading2>{t("title")}</Heading2>

				<div className="w-full md:w-2/3 flex flex-col gap-6">
					<Heading3>{t("description")}</Heading3>

					<p className="text-neutral-50">{t("paragraph1")}</p>
					<p className="text-neutral-50">{t("paragraph2")}</p>
					<p className="text-neutral-50">{t("paragraph3")}</p>
					<p className="text-neutral-50">{t("paragraph4")}</p>
				</div>
			</section>
			<Separator />
		</>
	);
}
