import { ContactForm } from "@/components/contact/contactForm";
import { Heading2 } from "@/components/ui/heading";
import { SocialIcon } from "@/components/ui/socialIcon";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
	return (
		<section className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-stretch justify-between mx-auto px-4 py-16">
			{/* Left Panel */}
			<div className="w-full lg:w-1/3 flex flex-col gap-2">
				<Heading2>Let&apos;s Connect</Heading2>

				<p className="text-neutral-100">
					Say hello at{" "}
					<a
						href="mailto:thibault.deverge@gmail.com"
						className="text-white border-b border-accent"
					>
						thibault.deverge@gmail.com
					</a>
				</p>

				<p className="text-neutral-100 mb-4">
					For more info, here&apos;s my{" "}
					<a href="#" download className="text-white border-b border-accent">
						resume
					</a>
				</p>

				<div className="flex gap-4">
					<SocialIcon href="#" icon={<FaLinkedin />} />
					<SocialIcon href="#" icon={<FaGithub />} />
					<SocialIcon href="#" icon={<FaInstagram />} />
				</div>
			</div>

			{/* Right Panel */}
			<ContactForm />
		</section>
	);
}
