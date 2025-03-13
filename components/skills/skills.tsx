import { useTranslations } from "next-intl";

import { Heading2 } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { icons } from "@/data/icons";
import { SkillIcon } from "./skillIcon";

export function Skills() {
	const t = useTranslations("Skills");

	return (
		<>
			<section
				id="about"
				className="container-custom items-stretch justify-between md:flex-row py-16"
			>
				{/* Left Panel */}
				<Heading2>{t("title")}</Heading2>

				{/* Right Panel */}
				<div className="w-full md:w-2/3 flex flex-col gap-8">
					<p>{t("description")}</p>

					<ul className="flex flex-wrap gap-4">
						{icons.map((icon) => {
							return <SkillIcon key={icon.name} icon={icon} />;
						})}
					</ul>
				</div>
			</section>
			<Separator />
		</>
	);
}
