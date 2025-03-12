import { defineRouting } from "next-intl/routing";
// import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["en", "fr"],

	defaultLocale: "en",
});
