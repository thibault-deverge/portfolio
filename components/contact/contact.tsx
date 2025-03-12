import { ContactForm } from "@/components/contact/contactForm";
import { Heading2 } from "@/components/ui/heading";
import { SocialIcon } from "@/components/ui/socialIcon";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
	return (
		<section
			id="contact"
			className="container flex flex-col lg:flex-row gap-16 lg:gap-0 items-stretch justify-between mx-auto px-4 pt-16 pb-8"
		>
			{/* Left Panel - Informations*/}
			<div className="w-full lg:w-1/3 flex flex-col gap-2">
				<Heading2>Let&apos;s Connect</Heading2>

				<p className="text-neutral-100">
					Say hello at{" "}
					<a
						href="mailto:thibault.deverge@gmail.com"
						className="text-white border-b border-accent hover:text-lime-400"
					>
						thibault.deverge@gmail.com
					</a>
				</p>

				<p className="text-neutral-100 mb-4">
					For more info, here&apos;s my{" "}
					<a
						href="#"
						download
						className="text-white border-b border-accent hover:text-lime-400"
					>
						resume
					</a>
				</p>

				<div className="flex gap-4">
					<SocialIcon href="#" icon={<FaLinkedin />} />
					<SocialIcon href="https://github.com/thibault-deverge" icon={<FaGithub />} />
					<SocialIcon href="https://www.instagram.com/_thibdvg/" icon={<FaInstagram />} />
				</div>
			</div>

			{/* Right Panel - Contact Form */}
			<ContactForm />
		</section>
	);
}
