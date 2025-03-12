import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { Button } from "../ui/button";
import { InputForm } from "./inputForm";

export function ContactForm() {
	const t = useTranslations("Contact");
	const locale = useLocale();
	const isEnglish = locale === "en";

	return (
		<form
			action={process.env.NEXT_PUBLIC_FORMSUBMIT_URL}
			method="POST"
			className="w-full lg:w-2/3 flex flex-col gap-6"
		>
			<input
				type="hidden"
				name="_next"
				value={`${process.env.NEXT_PUBLIC_DOMAIN}/thank-you`}
			/>

			<InputForm
				type="text"
				name="name"
				label={isEnglish ? "Name" : "Nom"}
				placeholder={isEnglish ? "Your name" : "Votre nom"}
			/>
			<InputForm
				type="email"
				name="email"
				label="Email"
				placeholder={isEnglish ? "Your email" : "Votre email"}
			/>
			<InputForm
				type="text"
				name="subject"
				label={isEnglish ? "Subject" : "Objet"}
				placeholder={isEnglish ? "Subject" : " Objet"}
			/>
			<InputForm
				type="textarea"
				name="message"
				label="Message"
				placeholder={isEnglish ? "Write your message" : "Votre message"}
			/>
			<Button
				type="submit"
				variant="default"
				className="!w-fit py-5 px-10 rounded-full uppercase cursor-pointer"
			>
				{t("submit")}
			</Button>
		</form>
	);
}
