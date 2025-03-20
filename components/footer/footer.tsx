import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="container-custom gap-2 md:flex-row justify-between py-4 text-sm">
			<p className="text-neutral-600">@2025 Thibault Deverge</p>
			<p className="text-neutral-600">
				{t("portfolio")}{" "}
				<a
					href="https://github.com/thibault-deverge/portfolio"
					target="_blank"
					className="underline cursor-pointer"
				>
					{t("link")}
				</a>{" "}
				(Made from scratch with Next.Js/TS/Tailwind)
			</p>
		</footer>
	);
}
