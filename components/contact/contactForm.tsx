import { Button } from "../ui/button";
import { InputForm } from "./inputForm";

export function ContactForm() {
	return (
		<form
			action="https://app.formsubmit.site/f/4eb2640d-9a69-4d32-8569-67edfd19e27a"
			method="POST"
			className="w-full lg:w-2/3 flex flex-col gap-6"
		>
			<InputForm type="text" name="name" label="Name" placeholder="Your Name" />
			<InputForm type="text" name="email" label="Email" placeholder="Your Email" />
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
				className="!w-fit py-5 px-10 rounded-full uppercase"
			>
				Submit
			</Button>
		</form>
	);
}
