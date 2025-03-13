import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</main>
	);
}
