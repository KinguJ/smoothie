import { EllipsisVertical, } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTrigger,
  SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";
import UserButton from './user-button';
import UserButtonMenu from "./user-button-menu";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop */}
      <nav className="md:flex hidden w-full max-w-xs gap-1">
        <UserButton />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="cursor-pointer">
              <EllipsisVertical className="cursor-pointer size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-4 [&>button]:cursor-pointer">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="space-y-3">
              <UserButtonMenu />
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      {/* Mobile */}
      <nav className="md:hidden">

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="cursor-pointer">
              <EllipsisVertical className="cursor-pointer size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-4 [&>button]:cursor-pointer">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="space-y-3">
              <UserButtonMenu />
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
