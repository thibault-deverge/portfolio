interface InputTextProps {
	type: "text" | "textarea";
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

			{type === "text" ? (
				<input
					type="text"
					name={name}
					id={name}
					placeholder={placeholder}
					className="bg-neutral-800 text-neutral-100 px-4 py-[10px] rounded-md placeholder:text-neutral-400"
				/>
			) : (
				<textarea
					name="message"
					placeholder="Write your message"
					className="min-h-36 bg-neutral-800 text-neutral-100 px-4 py-[10px] rounded-md placeholder:text-neutral-400"
				/>
			)}
		</div>
	);
}
