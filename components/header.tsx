import Link from "next/link";

import { Logo } from "@/components/logo";
import { NavRoutes } from "@/components/nav-routes";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-6 border-b shadow-sm bg-background">
      <div className="flex items-center justify-between w-full max-w-6xl gap-6 mx-auto">
        <Link href="/" className="hidden md:flex">
          <Logo />
        </Link>
        <MobileSidebar />
        <div className="flex items-center gap-x-10">
          <NavRoutes />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
