import { useTranslations } from "next-intl";
import { Slide } from "react-awesome-reveal";
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
					return (
						<Slide
							key={project.id}
							fraction={0.35}
							direction={project.id % 2 === 0 ? "left" : "right"}
							duration={700}
							triggerOnce
						>
							<ProjectCard project={project} />;
						</Slide>
					);
				})}
			</section>
			<Separator />
		</>
	);
}
