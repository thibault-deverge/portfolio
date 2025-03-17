import { useTranslations } from "next-intl";

import { ContactForm } from "@/components/contact/contactForm";
import { Heading2 } from "@/components/ui/heading";
import { SocialIcon } from "@/components/ui/socialIcon";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
	const t = useTranslations("Contact");

	return (
		<section
			id="contact"
			className="container-custom lg:flex-row gap-16 lg:gap-0 items-stretch justify-between pt-16 pb-8"
		>
			{/* Left Panel - Informations*/}
			<div className="w-full lg:w-1/3 flex flex-col gap-2">
				<Heading2>{t("title")}</Heading2>

				<p>
					{t("email_info")}{" "}
					<a
						href="mailto:thibault.deverge@gmail.com"
						className="text-white border-b border-accent hover:text-lime-400"
					>
						thibault.deverge@gmail.com
					</a>
				</p>

				<p className=" mb-4">
					{t("more_info")}{" "}
					<a
						href="/cv.pdf"
						download
						className="text-white border-b border-accent hover:text-lime-400"
					>
						{t("resume")}
					</a>
				</p>

				<div className="flex gap-4">
					<SocialIcon
						href="https://www.linkedin.com/in/thibault-deverge-061724356"
						icon={<FaLinkedin />}
					/>
					<SocialIcon href="https://github.com/thibault-deverge" icon={<FaGithub />} />
					<SocialIcon href="https://www.instagram.com/_thibdvg/" icon={<FaInstagram />} />
				</div>
			</div>

			{/* Right Panel - Contact Form */}
			<ContactForm />
		</section>
	);
}
