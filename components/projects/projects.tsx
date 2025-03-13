import { useTranslations } from "next-intl";
import { projects, ProjectType } from "@/data/projects";

import { ProjectCard } from "@/components/projects/projectCard";
import { Heading2 } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

export function Projects() {
	const t = useTranslations("Projects");

	return (
		<>
			<section id="projects" className="container-custom py-16 items-start">
				<Heading2>{t("title")}</Heading2>

				{projects.map((project: ProjectType) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</section>
			<Separator />
		</>
	);
}
