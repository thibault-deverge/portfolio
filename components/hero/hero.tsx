import { useTranslations } from "next-intl";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { HeroLink } from "@/components/hero/heroLink";
import { Heading1 } from "@/components/ui/heading";
import { IconCarousel } from "../ui/iconCarousel";

export function Hero() {
	const t = useTranslations("Hero");

	return (
		<>
			<header className="container-custom lg:min-h-[75vh] gap-8 md:flex-row items-center mt-10 mb-15">
				{/* Left Panel */}
				<div className="w-full md:w-5/6 lg:w-3/5 flex flex-col justify-center gap-6">
					<Heading1>
						{t("title1")} <br /> Thibault Deverge
					</Heading1>
					<p className="md:text-xl">{t("description")}</p>
					<HeroLink />
					<div className="hidden xl:block w-4/5 mx-auto mt-8 grayscale-80 opacity-40 hover:opacity-100 hover:grayscale-0 duration-200 transition-all">
						<IconCarousel />
					</div>
				</div>

				{/* Right Panel */}
				<div className="flex flex-cols max-h-[650px] rounded-md overflow-hidden">
					<Image src="/images/hero.png" alt="Thibault Deverge" width={650} height={650} />
				</div>
			</header>

			<Separator />
		</>
	);
}
