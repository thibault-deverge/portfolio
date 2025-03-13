type SkillIconProps = {
	icon: {
		name: string;
		Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	};
};

export function SkillIcon({ icon }: SkillIconProps) {
	return (
		<li
			key={icon.name}
			className="flex items-center text-neutral-100 gap-2 py-2 px-6 rounded-full border-1 border-neutral-300 hover:scale-110"
		>
			<icon.Component className="inline w-5 h-auto" /> {icon.name}
		</li>
	);
}
