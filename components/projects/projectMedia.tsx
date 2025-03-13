import Image from "next/image";

type ProjectMediaProps = {
	mediaType: "image" | "video";
	mediaUrl: string;
	title: string;
};

export function ProjectMedia({ mediaType, mediaUrl, title }: ProjectMediaProps) {
	return (
		<div className="w-full md:w-1/3 max-w-[600px] max-h-[600px] overflow-hidden rounded-md hover:scale-105 transition-all transition-duration-200">
			{mediaType === "video" ? (
				<video
					src={mediaUrl}
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-auto object-cover"
				/>
			) : (
				<Image
					src={mediaUrl}
					alt={`image of ${title}`}
					width={0}
					height={0}
					sizes="(max-width: 768px) 100vw, 50vw"
					className="w-full h-auto object-cover"
					priority
				/>
			)}
		</div>
	);
}
