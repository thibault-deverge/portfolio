"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopBtn() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scrollTop / docHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const strokeDasharray = 307;
	const strokeDashoffset = strokeDasharray - (strokeDasharray * scrollProgress) / 100;

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			onClick={handleClick}
			className="fixed bottom-4 right-3 w-12 h-12 cursor-pointer text-lime-300"
		>
			<svg className="progress-svg" width="100%" height="100%" viewBox="-1 -1 102 102">
				<path
					d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
					style={{
						transition: "stroke-dashoffset 10ms linear",
						strokeDasharray,
						strokeDashoffset,
					}}
					stroke="currentColor"
					fill="none"
					strokeWidth="2"
				/>
			</svg>

			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<FaArrowUp className="opacity-70 text-lime-300" />
			</div>
		</div>
	);
}
