"use client";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageToggle() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const locale = useLocale();
	const newLocale = locale === "en" ? "fr" : "en";

	const switchLanguage = () => {
		const search = searchParams ? `?${searchParams.toString()}` : "";
		const newPath = `/${newLocale}${pathname.replace(/^\/(en|fr)/, "")}${search}`;
		router.push(newPath);
	};

	return (
		<button onClick={switchLanguage} className="hover:scale-110 cursor-pointer">
			{newLocale === "fr" ? (
				<Image src="/images/fr.png" alt="Français" width={24} height={24} />
			) : (
				<Image src="/images/en.png" alt="English" width={24} height={24} />
			)}
		</button>
	);
}
