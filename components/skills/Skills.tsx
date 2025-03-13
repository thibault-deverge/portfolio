import { useTranslations } from "next-intl";

import { Heading2 } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { icons } from "@/data/icons";

export function Skills() {
	const t = useTranslations("Skills");

	return (
		<>
			<section
				id="about"
				className="container flex flex-col items-stretch justify-between md:flex-row mx-auto px-4 py-16"
			>
				{/* Left Panel */}
				<Heading2>{t("title")}</Heading2>

				{/* Right Panel */}
				<div className="w-full md:w-2/3 flex flex-col gap-8">
					<p className="text-neutral-50">{t("description")}</p>

					<ul className="flex flex-wrap gap-4">
						{icons.map((icon) => {
							return (
								<li
									key={icon.name}
									className="flex items-center gap-2 text-neutral-50 py-2 px-6 rounded-full border-1 border-neutral-300 hover:scale-110"
								>
									<icon.Component className="inline w-5 h-auto" /> {icon.name}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<Separator />
		</>
	);
}
