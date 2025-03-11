export type ProjectType = {
	id: number;
	title: string;
	description: string;
	mediaType: "image" | "video";
	mediaUrl: string;
	domain: string;
	techStack: string;
	githubUrl: string;
	demoUrl: string;
};

export const projects = [
	{
		id: 1,
		title: "ft_transcendence : A Real-Time Multiplayer Pong Web Application",
		description:
			"ft_transcendence is a web-based multiplayer Pong game combining real-time play, tournaments, and live chat in a sleek SPA. Built with Django REST and vanilla JS/HTML/SCSS, it features secure authentication, Docker containerization, and engaging gameplay showcasing full-stack expertise..",
		mediaType: "image" as const,
		mediaUrl: "/images/ft_pong.png",
		domain: "Fullstack Web Development",
		techStack: "Django/Django REST, HTML/CSS/JS, Docker, Nginx",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Ft-Transcendence",
		demoUrl: "https://ft-transcendence.pro/dashboard",
	},
	{
		id: 2,
		title: "Cub3D: A First-Person 3D Maze Exploration Game",
		description:
			"Cub3D is a first-person view inside a 3D maze using raycasting, the technique popularized by games like Wolfenstein 3D. This project introduces the use of the minimalist MiniLibX library for rendering 3D graphics in C. The goal is to simulate a 3D maze from a first-person perspective where the player can move around, interact with the environment, and explore the maze.",
		mediaType: "video" as const,
		mediaUrl: "/videos/cub3d.mp4",
		domain: "Game Development",
		techStack: "C, MiniLibX, Raycasting",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Cub3d/tree/main",
		demoUrl: "",
	},
	{
		id: 3,
		title: "Minishell: An Unix Shell",
		description:
			"Minishell is a simplified version of the Unix shell. It mimics the behavior of common Unix shells like bash. This project focuses on processes, file descriptors, and signal handling, offering a deep understanding of how a shell operates. Through the development of Minishell, I have gained hands-on experience with managing system calls, handling input/output, process pipelines and implementing built-in commands.d",
		mediaType: "image" as const,
		mediaUrl: "/images/minishell.png",
		domain: "System Programming",
		techStack: "C, Unix, System Calls",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Minishell/tree/master",
		demoUrl: "",
	},
];
