import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { ProjectType } from "@/data/projects";

import { Separator } from "@/components/ui/separator";
import { Heading3 } from "@/components/ui/heading";
import { ProjectMedia } from "./projectMedia";
import { ProjectLinks } from "./projectLinks";

type ProjectCardProps = {
	project: ProjectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
	const t = useTranslations("Projects");
	const locale = useLocale();
	const isEnglish = locale === "en";

	const {
		title_en,
		title_fr,
		description_en,
		description_fr,
		domain_en,
		domain_fr,
		techStack,
		mediaType,
		mediaUrl,
		githubUrl,
		demoUrl,
	} = project;

	return (
		<article className="flex flex-col md:flex-row md:justify-between gap-10 items-center mt-16">
			{/* Media */}
			<ProjectMedia mediaType={mediaType} mediaUrl={mediaUrl} title={title_en} />

			{/* Project Informations */}
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

				<ProjectLinks githubUrl={githubUrl} demoUrl={demoUrl} />
			</div>
		</article>
	);
}
