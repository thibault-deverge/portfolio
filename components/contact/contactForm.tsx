import { Button } from "../ui/button";
import { InputForm } from "./inputForm";

export function ContactForm() {
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

			<InputForm type="text" name="name" label="Name" placeholder="Your Name" />
			<InputForm type="email" name="email" label="Email" placeholder="Your Email" />
			<InputForm type="text" name="subject" label="Subject" placeholder="Subject" />
			<InputForm
				type="textarea"
				name="message"
				label="Message"
				placeholder="Write your message"
			/>
			<Button
				type="submit"
				variant="default"
				className="!w-fit py-5 px-10 rounded-full uppercase cursor-pointer"
			>
				Send Message
			</Button>
		</form>
	);
}
