import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/navbar/logo";
import { Navlink } from "./navlink";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
	return (
		<nav className="flex h-19 bg-neutral-900 text-neutral-100 px-1">
			<div className="container mx-auto h-full flex justify-between items-center">
				{/* Left side: Logo */}
				<Logo />

				{/* Right side : Desktop nav */}
				<div className="hidden md:flex gap-6 font-semibold letter-spacing-lg mt-3 md:mt-0 md:mr-3">
					<Navlink href="#home">Home</Navlink>
					<Navlink href="#about">About</Navlink>
					<Navlink href="#experiences">Experiences</Navlink>
					<Navlink href="#projects">Projects</Navlink>
				</div>

				{/* Right side: Hamburger menu */}
				<div className="md:hidden mt-3">
					<Sheet>
						<SheetTrigger>
							<RxHamburgerMenu size={24} />
						</SheetTrigger>
						<SheetContent side="top">
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-4 font-semibold letter-spacing-lg">
								<Navlink href="#home">Home</Navlink>
								<Navlink href="#about">About</Navlink>
								<Navlink href="#experiences">Experiences</Navlink>
								<Navlink href="#projects">Projects</Navlink>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
