export type ProjectType = {
	id: number;
	title_en: string;
	title_fr: string;
	description_en: string;
	description_fr: string;
	mediaType: "image" | "video";
	mediaUrl: string;
	domain_en: string;
	domain_fr: string;
	techStack: string;
	githubUrl: string;
	demoUrl: string;
};

export const projects: ProjectType[] = [
	{
		id: 1,
		title_en: "Personal Finance App: Budgeting, Transactions & Recurring Bills",
		title_fr:
			"Application de Finance Personnelle : Budgets, Transactions & Factures Récurrentes",
		description_en:
			"A full-stack personal finance dashboard built with Next.js 15, Auth.js TypeScript, TailwindCSS, Prisma and NeonDB. Features include transaction pagination, search/sort/filter, CRUD budgets & saving pots, progress tracking, recurring bills overview and avatar upload.",
		description_fr:
			"Tableau de bord finance personnelle full-stack réalisé avec Next.js 15, Auth.js TypeScript, TailwindCSS, Prisma et NeonDB. Comprend pagination des transactions, recherche/tri/filtre, CRUD pour budgets & cagnotte, suivi de progression, factures récurrentes et upload d’avatar.",
		mediaType: "image",
		mediaUrl: "/images/finance_app.png",
		domain_en: "Personal Finance Management",
		domain_fr: "Gestion de Finance Personnelle",
		techStack: "Next.js 15, TypeScript, TailwindCSS, Prisma ORM, Auth.js",
		githubUrl: "https://github.com/thibault-deverge/finance_app",
		demoUrl: "https://finance-app-peach-five.vercel.app",
	},
	{
		id: 2,
		title_en: "ft_transcendence : A Real-Time Multiplayer Pong Web Application",
		title_fr: "ft_transcendence : Une application web de Pong multijoueur en temps réel",
		description_en:
			"ft_transcendence is a web-based multiplayer Pong game combining real-time play, tournaments, and live chat in a sleek SPA. Built with Django REST and vanilla JS/HTML/SCSS, it features secure authentication, Docker containerization, and engaging gameplay showcasing full-stack expertise..",
		description_fr:
			"ft_transcendence est un jeu de Pong multijoueur en ligne alliant temps réel, tournois et chat dans une SPA. Il propose des fonctionnalités modernes telles que l'authentification OAuth2 et la gestion de profils, développé avec Django REST, Docker et du HTML/JS/SCSS vanilla, illustrant une expertise full-stack.",
		mediaType: "image" as const,
		mediaUrl: "/images/ft_pong.png",
		domain_en: "Fullstack Web Development",
		domain_fr: "Développement Web Fullstack",
		techStack: "Django, HTML/CSS/JS, Docker, Nginx",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Ft-Transcendence",
		demoUrl: "https://ft-transcendence.pro/dashboard",
	},
	{
		id: 3,
		title_en: "Cub3D: A First-Person 3D Maze Exploration Game",
		title_fr: "Cub3D : Un jeu d'exploration 3D à la première personne",
		description_en:
			"Cub3D is a first-person view inside a 3D maze using raycasting, the technique popularized by games like Wolfenstein 3D. This project introduces the use of the minimalist MiniLibX library for rendering 3D graphics in C. The goal is to simulate a 3D maze from a first-person perspective where the player can move around, interact with the environment, and explore the maze.",
		description_fr:
			"Cub3D offre une vue à la première personne dans un labyrinthe 3D en utilisant le raycasting, une technique popularisée par des jeux comme Wolfenstein 3D. Ce projet introduit l'utilisation de la bibliothèque minimaliste MiniLibX pour le rendu de graphismes 3D en C. L'objectif est de simuler un labyrinthe 3D en vue à la première personne, permettant au joueur de se déplacer, d'interagir avec l'environnement et d'explorer le labyrinthe.",
		mediaType: "video" as const,
		mediaUrl: "/videos/cub3d.mp4",
		domain_en: "Game Development",
		domain_fr: "Développement de jeux",
		techStack: "C, MiniLibX, Raycasting",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Cub3d/tree/main",
		demoUrl: "",
	},
	{
		id: 4,
		title_en: "Minishell: An Unix Shell",
		title_fr: "Minishell : Un shell Unix",
		description_en:
			"Minishell is a simplified version of the Unix shell. It mimics the behavior of common Unix shells like bash. This project focuses on processes, file descriptors, and signal handling, offering a deep understanding of how a shell operates. Through the development of Minishell, I have gained hands-on experience with managing system calls, handling input/output, process pipelines and implementing built-in commands.d",
		description_fr:
			"Minishell est une version simplifiée du shell Unix. Il imite le comportement des shells Unix courants tels que bash. Ce projet se concentre sur les processus, les descripteurs de fichiers et la gestion des signaux, offrant une compréhension approfondie du fonctionnement d'un shell. Grâce au développement de Minishell, j'ai acquis une expérience pratique dans la gestion des appels système, la manipulation des entrées/sorties, les pipelines de processus et l'implémentation de commandes intégrées.",
		mediaType: "image" as const,
		mediaUrl: "/images/minishell.png",
		domain_en: "System Programming",
		domain_fr: "Programmation système",
		techStack: "C, Unix, System Calls",
		githubUrl: "https://github.com/thibault-deverge/42-Cursus__Minishell/tree/master",
		demoUrl: "",
	},
];
