import { useTranslations } from "next-intl";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { HeroLink } from "@/components/hero/heroLink";
import { Heading1 } from "@/components/ui/heading";

export function Hero() {
	const t = useTranslations("Hero");

	return (
		<>
			<header className="container-custom gap-8 md:flex-row justify-center mt-10 mb-15">
				{/* Left Panel */}
				<div className="w-full md:w-5/6 lg:w-2/3 flex flex-col justify-center gap-4">
					<Heading1>
						{t("title1")} <br /> Thibault Deverge
					</Heading1>
					<p className="md:text-lg">{t("description")}</p>
					<HeroLink />
				</div>

				{/* Right Panel */}
				<div className="flex flex-cols rounded-md overflow-hidden">
					<Image src="/images/hero.png" alt="Thibault Deverge" width={650} height={650} />
				</div>
			</header>
			<Separator />
		</>
	);
}
