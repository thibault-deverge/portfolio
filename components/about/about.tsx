import { Heading2, Heading3 } from "@/components/ui/heading";
import { StyledLink } from "@/components/ui/styledLink";
import { Separator } from "@/components/ui/separator";

export function About() {
	return (
		<>
			<section className="container flex flex-col items-stretch justify-between md:flex-row mx-auto px-4 py-16">
				<Heading2>About Me</Heading2>

				<div className="w-full md:w-2/3 flex flex-col gap-6">
					<Heading3>I am a fullstack developer based in France.</Heading3>
					<p className="text-neutral-50">
						I&apos;m a 29-year-old fullstack developer with a law degree (with honors) who
						swapped textbooks for adventure—spending over three years traveling through
						Thailand, the Philippines, and extensively in Vietnam, where I even crossed
						the country by motorbike. Back in France, I aced School 42&apos;s common core
						and now thrive on building professional expertise. Open to job opportunities,
						internships, and freelance projects, I combine technical precision with a
						passion for culture, travel, and lifelong learning.
					</p>
					<div className="flex">
						<StyledLink href="#">MORE ABOUT ME</StyledLink>
					</div>
				</div>
			</section>
			<Separator />
		</>
	);
}
