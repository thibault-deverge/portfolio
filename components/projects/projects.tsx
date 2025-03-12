import { ProjectCard } from "@/components/projects/projectCard";
import { Heading2 } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { projects, ProjectType } from "@/data/projects";

export function Projects() {
	return (
		<>
			<section
				id="projects"
				className="container mx-auto px-4 py-16 flex flex-col items-start"
			>
				<Heading2>Featured Projects</Heading2>

				{projects.map((project: ProjectType) => {
					return <ProjectCard key={project.id} {...project} />;
				})}
			</section>
			<Separator />
		</>
	);
}
