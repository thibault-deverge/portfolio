import { StyledLink } from "@/components/ui/styledLink";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type ProjectLinksProps = {
	githubUrl: string;
	demoUrl?: string;
};

export function ProjectLinks({ githubUrl, demoUrl }: ProjectLinksProps) {
	return (
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
	);
}
