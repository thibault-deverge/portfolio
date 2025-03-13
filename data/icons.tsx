import { CIcon } from "./icons/cIcon";
import { CppIcon } from "./icons/cppIcon";
import { cssIcon } from "./icons/cssIcon";
import { DjangoIcon } from "./icons/djangoIcon";
import { DockerIcon } from "./icons/dockerIcon";
import { GitIcon } from "./icons/gitIcon";
import { JavascriptIcon } from "./icons/javascriptIcon";
import { NextJsIcon } from "./icons/nextjsIcon";
import { ReactIcon } from "./icons/reactIcon";

export interface TypeIcon {
	name: string;
	Component: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const icons: TypeIcon[] = [
	{
		name: "C",
		Component: CIcon,
	},
	{
		name: "C++",
		Component: CppIcon,
	},
	{
		name: "CSS",
		Component: cssIcon,
	},

	{
		name: "Javascript",
		Component: JavascriptIcon,
	},
	{
		name: "React",
		Component: ReactIcon,
	},
	{
		name: "Next.Js",
		Component: NextJsIcon,
	},
	{
		name: "Docker",
		Component: DockerIcon,
	},
	{
		name: "Django",
		Component: DjangoIcon,
	},

	{
		name: "Git",
		Component: GitIcon,
	},
];
