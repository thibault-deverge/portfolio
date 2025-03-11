import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";

import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<About />
			<Contact />

			<section className="container flex flex-col gap-2 md:flex-row justify-between mx-auto px-4 py-8 text-neutral-600 text-sm">
				<p>@2025 Thibault Deverge</p>
				<p>
					Code available{" "}
					<a href="#" target="_blank" className="underline cursor-pointer">
						here
					</a>{" "}
					(Next.Js/Typescript)
				</p>
			</section>
		</main>
	);
}
