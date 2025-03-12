import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/navbar/logo";
import { Navlink } from "@/components/navbar/navlink";
import { SheetLink } from "@/components/navbar/sheetLink";

import { RxHamburgerMenu } from "react-icons/rx";
import { XIcon } from "lucide-react";

export function Navbar() {
	return (
		<nav className="flex h-19 bg-neutral-900 text-neutral-100 px-1">
			<div className="container mx-auto h-full flex justify-between items-center">
				{/* Left side: Logo */}
				<Logo />

				{/* Right side : Desktop nav */}
				<div className="hidden md:flex gap-6 font-semibold letter-spacing-lg mt-3 md:mt-0 md:mr-3">
					<Navlink href="#project">Projects</Navlink>
					<Navlink href="#about">About</Navlink>
					<Navlink href="#contact">Contact</Navlink>
				</div>

				{/* Right side: Hamburger menu */}
				<div className="md:hidden mt-3">
					<Sheet>
						<SheetTrigger>
							<RxHamburgerMenu size={24} />
						</SheetTrigger>
						<SheetContent
							side="left"
							className=" w-full h-fit mt-18 bg-neutral-900 opacity-90"
						>
							<SheetClose className="absolute top-4 right-4 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 p-2 rounded-full">
								{/* You can use your preferred icon for the close button */}
								<XIcon size={20} />
							</SheetClose>
							<div className="flex flex-col gap-4 font-semibold letter-spacing-lg">
								<SheetClose asChild>
									<SheetLink href="#projects">Projects</SheetLink>
								</SheetClose>
								<SheetClose asChild>
									<SheetLink href="#about">About</SheetLink>
								</SheetClose>
								<SheetClose asChild>
									<SheetLink href="#contact" last>
										Contact
									</SheetLink>
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
