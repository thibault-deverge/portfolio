import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Heading3 } from "@/components/ui/heading";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { StyledLink } from "../ui/styledLink";

interface ProjectCardProps {
	title: string;
	description: string;
	mediaType: "image" | "video";
	mediaUrl: string;
	domain: string;
	techStack: string;
	githubUrl: string;
	demoUrl: string;
}

export function ProjectCard({
	title,
	description,
	mediaType,
	mediaUrl,
	domain,
	techStack,
	githubUrl,
	demoUrl,
}: ProjectCardProps) {
	return (
		<article className="flex flex-col md:flex-row md:justify-between gap-10 items-center mt-16">
			<div className="w-full md:w-1/3 max-w-[600px] max-h-[600px] overflow-hidden rounded-md">
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
						alt={`image of ${title}`}
						width={0}
						height={0}
						sizes="(max-width: 768px) 100vw, 50vw"
						className="w-full h-auto object-cover"
						priority
					/>
				)}
			</div>

			<div className="flex flex-col gap-4 md:w-2/3 text-neutral-50">
				<Heading3>{title}</Heading3>
				<p className="text-md">{description}</p>

				<div className="flex flex-col gap-4 mt-4">
					<h4 className="font-manrope uppercase font-bold text-md">Project Info</h4>
					<Separator />

					<div className="flex justify-between">
						<p className="font-bold">Domain</p>
						<p>{domain}</p>
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
