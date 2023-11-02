import { Menu } from "lucide-react";

import { Sidebar } from '@/components/sidebar';

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="transition md:hidden hover:opacity-75">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}