import Image from "next/image";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";
import { Heading3 } from "@/components/ui/heading";
import { ProjectType } from "@/data/projects";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { StyledLink } from "../ui/styledLink";

export function ProjectCard({
	title_en,
	title_fr,
	description_en,
	description_fr,
	mediaType,
	mediaUrl,
	domain_en,
	domain_fr,
	techStack,
	githubUrl,
	demoUrl,
}: ProjectType) {
	const t = useTranslations("Projects");
	const locale = useLocale();
	const isEnglish = locale === "en";

	return (
		<article className="flex flex-col md:flex-row md:justify-between gap-10 items-center mt-16">
			<div className="w-full md:w-1/3 max-w-[600px] max-h-[600px] overflow-hidden rounded-md hover:scale-105 transition-all transition-duration-200">
				{mediaType === "video" ? (
					<video
						src={mediaUrl}
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto object-cover"
					/>
				) : (
					<Image
						src={mediaUrl}
						alt={`image of ${title_en}`}
						width={0}
						height={0}
						sizes="(max-width: 768px) 100vw, 50vw"
						className="w-full h-auto object-cover"
						priority
					/>
				)}
			</div>

			<div className="flex flex-col gap-4 md:w-2/3 text-neutral-50">
				<Heading3>{isEnglish ? title_en : title_fr}</Heading3>
				<p className="text-md">{isEnglish ? description_en : description_fr}</p>

				<div className="flex flex-col gap-4 mt-4">
					<h4 className="font-manrope uppercase font-bold text-md">{t("info_title")}</h4>
					<Separator />

					<div className="flex justify-between">
						<p className="font-bold">{t("domain")}</p>
						<p>{isEnglish ? domain_en : domain_fr}</p>
					</div>
					<Separator />

					<div className="flex justify-between">
						<p className="font-bold">Tech</p>
						<p>{techStack}</p>
					</div>
					<Separator />
				</div>

				<div className="mt-4 flex gap-6">
					<StyledLink href={githubUrl} target="_blank">
						GitHub <FaGithub className="inline" />
					</StyledLink>

					{demoUrl && (
						<StyledLink href={demoUrl} target="_blank">
							Live Demo <FaArrowUpRightFromSquare className="inline" />
						</StyledLink>
					)}
				</div>
			</div>
		</article>
	);
}
