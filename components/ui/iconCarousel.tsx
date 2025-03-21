"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { icons } from "@/data/icons";
import "keen-slider/keen-slider.min.css";
import { SkillIcon } from "../skills/skillIcon";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export function IconCarousel() {
	const [mounted, setMounted] = useState(false);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 4, spacing: 6 },
		created(s) {
			s.moveToIdx(0);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 1);
		},
	});

	useEffect(() => {
		setMounted(true);
		const interval = setInterval(() => {
			instanceRef.current?.next();
		}, 2700);
		return () => clearInterval(interval);
	}, [sliderRef, instanceRef]);

	if (!mounted) return null;

	return (
		<div className="relative my-6">
			{/* Left Arrow */}
			<button
				onClick={() => instanceRef.current?.prev()}
				className="absolute top-1/2 left-[-40px] z-10 transform -translate-y-1/2"
			>
				<IoIosArrowBack size={18} className="text-white" />
			</button>

			{/* Slider */}
			<div ref={sliderRef} className="keen-slider overflow-hidden">
				{icons.map((icon, index) => (
					<div
						key={index}
						className="keen-slider__slide h-16 flex justify-center items-center"
					>
						<SkillIcon icon={icon} />
					</div>
				))}
			</div>

			{/* Right Arrow */}
			<button
				onClick={() => instanceRef.current?.next()}
				className="absolute top-1/2 right-[-40px] z-10 transform -translate-y-1/2"
			>
				<IoIosArrowForward size={18} className="text-white" />
			</button>
		</div>
	);
}
