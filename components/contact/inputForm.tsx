interface InputTextProps {
	type: "text" | "textarea" | "email";
	name: string;
	label: string;
	placeholder: string;
}

export function InputForm({ type, name, label, placeholder }: InputTextProps) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-neutral-100">
				{label}
			</label>

			{type !== "textarea" ? (
				<input
					type={type}
					name={name}
					id={name}
					pattern={type === "email" ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" : undefined}
					placeholder={placeholder}
					required
					className="bg-neutral-800 text-neutral-100 px-4 py-[10px] rounded-md placeholder:text-neutral-400 hover:placeholder:text-neutral-100"
				/>
			) : (
				<textarea
					name="message"
					placeholder="Write your message"
					required
					className="min-h-36 bg-neutral-800 text-neutral-100 px-4 py-[10px] rounded-md placeholder:text-neutral-400 hover:placeholder:text-neutral-100"
				/>
			)}
		</div>
	);
}
