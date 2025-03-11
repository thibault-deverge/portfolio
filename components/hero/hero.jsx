import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/socialIcon";
import { Separator } from "@/components/ui/separator";

import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Hero() {
	return (
		<>
			<section className="container mx-auto flex flex-col gap-16 sm:flex-row justify-center px-4 mt-10 mb-15">
				{/* Left Panel */}
				<div className="flex flex-col justify-center gap-4 text-neutral-100">
					<h1 className="font-bebas uppercase text-white text-5xl md:text-6xl desktop:text-8xl">
						Hi, I am <br />
						Thibault Deverge
					</h1>

					<p className="text-neutral-200 md:text-lg">
						Based in France, I'm a fullstack developer dedicated to building robust,
						innovative web applications that deliver seamless user experiences.
					</p>

					<div className="flex flex-wrap gap-3 mt-4">
						<Button asChild size="responsive">
							<Link href="#">
								<FaArrowAltCircleDown />
								Contact
							</Link>
						</Button>

						<Button asChild variant="secondary" size="responsive">
							<a href="/cv.pdf" download>
								<FaPaperclip />
								Get CV
							</a>
						</Button>

						<SocialIcon href="#" icon={<FaLinkedinIn />} />
						<SocialIcon href="#" icon={<FaGithub />} />
					</div>
				</div>

				{/* Right Panel */}
				<div className="flex flex-cols rounded-md overflow-hidden">
					<Image src="/images/hero.png" alt="Thibault Deverge" width={600} height={700} />
				</div>
			</section>
			<Separator />
		</>
	);
}
