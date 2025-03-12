import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="container flex flex-col gap-2 md:flex-row justify-between mx-auto px-4 py-4 text-neutral-600 text-sm">
			<p>@2025 Thibault Deverge</p>
			<p>
				{t("portfolio")}{" "}
				<a
					href="https://github.com/thibault-deverge/portfolio"
					target="_blank"
					className="underline cursor-pointer"
				>
					{t("link")}
				</a>{" "}
				(Next.Js/Typescript/Tailwind)
			</p>
		</footer>
	);
}
